from flask import Flask
import requests
import os
app = Flask(__name__)
@app.route("/test")
def index():
    return 'TEST MESSAGE'

@app.route("/yelp/search/<location>/<restaurant>")
def yelpSearch(location, restaurant):
    url = "https://api.yelp.com/v3/businesses/search?term=" + restaurant + "&location=" + location + "&limit=4"
    headers = {'Authorization': 'Bearer ZBhBW-3hcpQxPNC0xiobU3wlTe1MtUk_Zo2EeBBV4vS0ZKu5aNVG0nYurjhrI1cOPd-jX2QUu4iMsg6Z6kN6Jc1a5Jrq78MxDg68Y_neaSg40HFS9kfvO7PJHVAdWHYx'} 
    r = requests.get(url, headers=headers)
    return r.text

@app.route("/yelp/ratings/<restaurantID>")
def yelpRatings(restaurantID):
    url = "https://api.yelp.com/v3/businesses/"+restaurantID+"/reviews"
    headers = {'Authorization': 'Bearer ZBhBW-3hcpQxPNC0xiobU3wlTe1MtUk_Zo2EeBBV4vS0ZKu5aNVG0nYurjhrI1cOPd-jX2QUu4iMsg6Z6kN6Jc1a5Jrq78MxDg68Y_neaSg40HFS9kfvO7PJHVAdWHYx'} 
    r = requests.get(url, headers=headers)
    return r.text
     
if __name__ == '__main__':
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0',port=port)
