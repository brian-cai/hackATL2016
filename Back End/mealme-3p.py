from flask import Flask
import requests

app = Flask(__name__)
@app.route("/test")
def index():
    return 'TEST MESSAGE'

@app.route("/hello/<name")
def helloCalled(name):
    return name

if __name__ == '__main__':
    app.run()
