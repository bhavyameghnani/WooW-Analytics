from flask import Flask, jsonify, request, send_file
from flask_cors import CORS,cross_origin
import json, os, base64
from datetime import datetime 
from os import walk
from elasticsearch import Elasticsearch

es = Elasticsearch(
    ["https://elastic:RZpr3cb5xWqMKpnzEi2JL22R@884bbc0d58c74e63aae612cee67cf2e7.us-east-1.aws.found.io:9243"]) #This will change to new instance

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(support_credentials=True)
def hello():
    return "Welcome to WooW Analytics Service by Team Parabellum!"

    
app.run(port=5000, debug=True)
