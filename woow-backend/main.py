from flask import Flask, jsonify, request, send_file
from flask_cors import CORS,cross_origin
import json, os, base64
from datetime import datetime 
from os import walk
from elasticsearch import Elasticsearch
from flask import jsonify

# proj = {
#     'name': 'Parabellum',
#     'project-id': '311',
#     'lead': 'Darshan',
# }

es = Elasticsearch(
    cloud_id="parabellum-cluster:YXAtc291dGgtMS5hd3MuZWxhc3RpYy1jbG91ZC5jb206OTI0MyQ0OWVkMGQ0ZDdmOGQ0YWFiYjAwZTAwODc1NDljZDlhZiQzZTE1ZTBlMzdkMDQ0NGFhYjA1MmFkNjA2ZDM1MTA0Mw==",
    http_auth=("elastic", "i0RTOYaJjgvfgYds7XK3Xyy4"),
    ) 

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
@cross_origin(support_credentials=True)
def hello():
    return "Welcome to WooW Analytics Service by Team Parabellum!"

"""
Project Related API's
"""
@app.route('/addProject', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)  
def addProject(): 
    proj = request.get_json(silent=True)
    res = es.index(index="project", body=proj)
   
    return res

@app.route('/getProject/<id>', methods=['GET'])
@cross_origin(support_credentials=True)  
def getProject(id): 
    res = es.get(index="project", id=id)
    return res



@app.route('/getAllProjects', methods=['GET'])
@cross_origin(support_credentials=True)
def getAllProjects():
    # declare a filter query dict object
    match_all = {
        "query": {
            "match_all": {}
        }
    }
    res = es.search(index="project", body=match_all)
    return jsonify(res["hits"]["hits"])



"""
User Management API's
"""
@app.route('/addUser', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def addUser():
    user = request.get_json(silent=True)
    res = es.index(index="user", body=user)

    return res

@app.route('/login', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def login():
    login_user = request.get_json(silent=True)
    users = es.search(index="user", body = {
    'size' : 10000,
    'query': {
        'match_all' : {}
    }
    })

    print(login_user)
    for user in users['hits']['hits']:
        print(user['_source'])
        if(user['_source']['Email'] == login_user['Email'] and  user['_source']['Password'] == login_user['Password']):
            print("logged",user['_source'])
            return user['_source']

    return "False"


@app.route('/updateUser/<id>', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def updateUser(id):
    user = request.get_json(silent=True)
    res = es.index(index="user", id=id, body=user)

    return res


@app.route('/getUser/<id>', methods=['GET'])
@cross_origin(support_credentials=True)
def getUser(id):
    res = es.get(index="user", id=id)
    return res["_source"]

@app.route('/getAllUser', methods=['GET'])
@cross_origin(support_credentials=True)
def getAllUser():
    # declare a filter query dict object
    match_all = {
        "size": 100,
        "query": {
            "match_all": {}
        }
    }
    res = es.search(index="user", body=match_all)
    return jsonify(res["hits"]["hits"])


"""
Task Management API's
"""
@app.route('/addTask/<id>', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def addTask(id):
    task = request.get_json(silent=True)
    res1 = es.index(index="task", body=task)
    taskid = res1["_id"]

    doc = es.get(index="project", id=id)
    projectid=doc["_id"]
    doc["_source"]["projectrequirement"].append(taskid)
    res = es.index(index="project", id=int(projectid), body=json.dumps(doc["_source"]))
    return res


@app.route('/updateTask/<id>', methods=['GET', 'POST'])
@cross_origin(support_credentials=True)
def updateTask(id):
    proj = request.get_json(silent=True)
    res = es.index(index="task", id=id, body=proj)
    return res


@app.route('/getTask/<id>', methods=['GET'])
@cross_origin(support_credentials=True)
def getTaskWithTaskID(id):
    res = es.get(index="task", id=id)
    return res



@app.route('/getProjectTask/<id>', methods=['GET'])
@cross_origin(support_credentials=True)
def getTaskWithProject(id):
    doc = es.get(index="project", id=id)
    tasklist=[]
    for taskid in doc["_source"]["projectrequirement"]:
        tasklist.append(es.get(index="task", id=taskid))

    return jsonify(tasklist)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
