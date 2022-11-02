import pysolr
import json

CORE_NAME1 = "VSM"
CORE_NAME2 = "BM25"
AWS_IP = "localhost"

with open('train.json') as j:
    train_data = json.load(j)

class Indexer:
    def __init__(self, CORE_NAME):
        self.solr_url = f'http://{AWS_IP}:8983/solr/'
        self.connection = pysolr.Solr(self.solr_url + CORE_NAME, always_commit=True, timeout=5000000)
        self.core_name = CORE_NAME

    def create_documents(self, docs):
        print(self.connection.add(docs))

if __name__ == "__main__":
    c1 = Indexer(CORE_NAME1)
    c2 = Indexer(CORE_NAME2)

    c1.create_documents(train_data)
    c2.create_documents(train_data)