from app.diagrams import diagrams
from flask import Flask, Request

class Server(object):
    
    def __init__(self, port=3019):
        self.server = Flask("secret_fire")
        self.port = port
        self.setroutes()

    def setroutes(self):
        @self.server.route("/diagrams"):
        def diagrams():
            return diagrams.render()
