import os
import requests

CORE_NAME1 = "VSM"
CORE_NAME2 = "BM25"
AWS_IP = "localhost"
solr_url = f'http://{AWS_IP}:8983/solr/'

def delete_core(core):
    print(os.system('sudo su - solr -c "/opt/solr/bin/solr delete -c {core}"'.format(core=core)))

def create_core(core):
    print(os.system(
        'sudo su - solr -c "/opt/solr/bin/solr create -c {core} -n data_driven_schema_configs"'.format(
            core=core)))

def add_fields(solr_url, core_name):
        data = {
            "add-field": [
                {
                    "name": "lang",
                    "type": "string",
                    "multiValued": False
                },
                {
                    "name": "text_de",
                    "type": "text_de",
                    "multiValued": False
                },
                {
                    "name": "text_en",
                    "type": "text_en",
                    "multiValued": False
                },
                {
                    "name": "text_ru",
                    "type": "text_ru",
                    "multiValued": False
                },
                {
                    "name": "tweet_urls",
                    "type": "string",
                    "multiValued": True
                },
                {
                    "name": "tweet_hashtags",
                    "type": "string",
                    "multiValued": True
                }
            ]
        }

        print(requests.post(solr_url + core_name + "/schema", json=data).json())

delete_core(CORE_NAME1)
create_core(CORE_NAME1)
#add_fields(solr_url, CORE_NAME1)

delete_core(CORE_NAME2)
create_core(CORE_NAME2)
#add_fields(solr_url, CORE_NAME2)