from flask import Flask
import requests

app = Flask(__name__)
@app.route("/test")
def index():
    return 'TEST MESSAGE'

@app.route("/yelp/search/<location>/<restaurant>")
def helloCalled(location, restaurant):
    url = "https://api.yelp.com/v3/businesses/search?term=" + restaurant + "&location=" + location + "&limit=4"
    headers = {'Authorization': 'Bearer ZBhBW-3hcpQxPNC0xiobU3wlTe1MtUk_Zo2EeBBV4vS0ZKu5aNVG0nYurjhrI1cOPd-jX2QUu4iMsg6Z6kN6Jc1a5Jrq78MxDg68Y_neaSg40HFS9kfvO7PJHVAdWHYx'} 
    r = requests.get(url, headers=headers)
    return r.text

if __name__ == '__main__':
    app.run()
