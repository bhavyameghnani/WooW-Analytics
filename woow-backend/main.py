from flask import Flask, jsonify, request, send_file
from flask_cors import CORS,cross_origin
import json, os, base64
from datetime import datetime 
from os import walk
from elasticsearch import Elasticsearch

proj = {
    'name': 'Parabellum',
    'project-id': '311',
    'lead': 'Darshan',
}

es = Elasticsearch(
    cloud_id="parabellum-cluster:YXAtc291dGgtMS5hd3MuZWxhc3RpYy1jbG91ZC5jb206OTI0MyQ0OWVkMGQ0ZDdmOGQ0YWFiYjAwZTAwODc1NDljZDlhZiQzZTE1ZTBlMzdkMDQ0NGFhYjA1MmFkNjA2ZDM1MTA0Mw==",
    http_auth=("elastic", "i0RTOYaJjgvfgYds7XK3Xyy4"),
    ) #This will change to new instance

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(support_credentials=True)
def hello():
    return "Welcome to WooW Analytics Service by Team Parabellum!"

@app.route('/addProject/<id>')
@cross_origin(support_credentials=True)  
def addProject(id): 
    res = es.index(index="project", id=id, body=proj)
   
    return res["result"]

@app.route('/getProject/<id>')
@cross_origin(support_credentials=True)  
def getProject(id): 
    res = es.get(index="project", id=id)
    return res["_source"]


app.run(port=5000, debug=True)
