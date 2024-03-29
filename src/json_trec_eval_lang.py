import json
import urllib.request
import urllib.parse
import subprocess
import os
from googletrans import Translator
import pysolr

translator = Translator()
solr_url = 'http://34.125.44.195:8983/solr/'


def query_lang_checker(q):
    field_lang = 'text_' + translator.detect(q).lang
    if field_lang not in ['text_en', 'text_ru', 'text_de']:
        field_lang = "text_ru"

    return f"{field_lang}:{q}"


def parseInput(file):

    langugage = dict()
    weight = ''

    langugage['en'] = 'tweet_hashtags^2.13%20text_en^2.4%20text_de^1.9%20text_ru^1.9%20_text_en_^2.2'
    langugage['de'] = 'tweet_hashtags^2.0%20text_en^2.0%20text_de^2.37%20text_ru^1.2%20_text_de_^2.8'
    langugage['ru'] = 'tweet_hashtags^2.2%20text_en^1.3%20text_de^1.3%20text_ru^2.25%20_text_ru_^2.35'

    l = ['BM25', 'VSM']
    numsdocs = '20'

    for model in l:

        connection = pysolr.Solr(solr_url + model, always_commit=True)
        open(model + '/' + model+'parsed.txt', 'w').close()

        with open(file, encoding="utf-8") as inputFile:

            for line in inputFile:
                tokens = line.replace(':', ' ').split(' ')

                if tokens[0] == 'lang':
                    weight = langugage[tokens[1].strip()]
                    continue

                qid = tokens[0]
                query = ' '.join(tokens[1:])
                query = urllib.parse.quote(query)
                print(query)
                query = query_lang_checker(query)

                inurl_bm25 = 'http://34.125.44.195:8983/solr/' + model + '/select?defType=edismax&fl=id,score&indent=on&q=' + \
                    query + '&qf=' + weight + '&rows=' + numsdocs + '&wt=json'

                data = urllib.request.urlopen(inurl_bm25).read()
                # data = connection.search(query, fl=['id', 'score'], rows=20)
                # print(inurl_bm25)
                # print(data)
                docs = json.loads(data.decode('utf-8'))['response']['docs']
                print(docs)
                # # the ranking should start from 1 and increase
                outf = open(model + '/' + model+'parsed.txt',
                            'a+', encoding='utf-8')
                rank = 1

                for doc in docs:
                    print(str(doc['score']))
                    outf.write(qid + ' ' + 'Q0' + ' ' + str(doc['id']) + ' ' + str(
                        rank) + ' ' + str(doc['score']) + ' ' + model + '\n')
                    rank += 1

                outf.close()

    print("Successfully parsed from solr")


def executeTrec():

    print("Running Trec command")
    p = subprocess.Popen(["trec_eval.9.0/trec_eval", "-qcM1000 -m map", "qrel.txt",
                         "/BM25/BM25parsed.txt"], stdout=subprocess.PIPE)
    output, err = p.communicate()

    model = 'BM25/bm25_eval.txt'
    trec_output = open(model, 'w')
    trec_output.write(output.decode('utf-8'))
    trec_output.close()

    ################################################################

    p = subprocess.Popen(["trec_eval.9.0/trec_eval", "-qcM1000", "qrel.txt",
                         "/VSM/VSMparsed.txt"], stdout=subprocess.PIPE)
    output, err = p.communicate()

    model = 'VSM/vsm_eval.txt'
    trec_output = open(model, 'w')
    trec_output.write(output.decode('utf-8'))
    trec_output.close()

    print("Successfully evaluated all models")


def main():
    parseInput('queries.txt')
    executeTrec()


if __name__ == '__main__':
    main()
