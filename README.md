# IRProject3
Evaluation of IR models

Create cores for BM25 and VSM using the createCore and indexer files

You can git a POST request via postman to delete the data and reindex it using the indexer everytime you modify the core schema:
http://{GCP_IP}:8983/solr/VSM/update
http://{GCP_IP}:8983/solr/BM25/update
Body(JSON)- 
{
    "delete": {
        "query": "*:*"
    }
}
Run the json_trec_eval_lang.py file to generate the output of queries for BM25 and VSM 
Upload those files to GCP to evaluate the MAP scores.
You need to have trec installed in your VM to run the trec_eval query

Query: trec_eval -q -c -M 1000 qrel.txt {output_file_for_BM25/VSM}

Improve MAP scores by modifying parameters (eg: k, b in BM25)

Get the best possible MAP scores 
