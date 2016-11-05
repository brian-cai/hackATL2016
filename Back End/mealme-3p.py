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
     
@app.route("/eatstreet/search/<address>")
def eatStreetFindRestaurant(address):
    url = "https://api.eatstreet.com/publicapi/v1/restaurant/search?street-address=" + address
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95'} 
    r = requests.get(url, headers=headers)
    return r.text

@app.route("/eatstreet/menu/<apiKey>")
def eatStreetViewMenu(apiKey):
    url = "https://api.eatstreet.com/publicapi/v1/restaurant/" + apiKey + "/menu"
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95'} 
    r = requests.get(url, headers=headers)
    return r.text


@app.route("/eatstreet/order/<restaurantAPI>/<items>/<deliveryOrPIckup>/<cashOrCard>/<testOrderTF>/<tipAmount>/<personAPI>")
def eatStreetOrder(restaurantAPI, items, deliveryOrPickup, cashOrCard, testOrderTF, tipAmount, personAPI):
    url = "https://api.eatstreet.com/publicapi/v1/send-order?restaurantApiKey=" + "RESTAURANTAPI" + \
    "&items=" + "XXX" + "&method=" + "XXX" + "&payment=" + "XXX" + "&test=" + "true&tip=" + "XXX" + \
    "&card=" + "PERSONAPI" + "&address="+ "PERSONAPI" + "&recipient=" + "PERSONAPI"
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95'} 
    r = requests.get(url, headers=headers)
    return r.text


@app.route("/eatstreet/registerUser/<email>/<password>/<firstName>/<lastName>/<phone>")
def eatStreetRegisterUser(email, password, firstName, lastName, phone):
    url = "https://api.eatstreet.com/publicapi/v1/register-user?email=" + email + "&password=" + password + \
    "&firstName=" + firstName + "&lastName=" + lastName + "&phone=" + phone
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95', "Content-Type": "application/json"} 
    r = requests.get(url, headers=headers)
    return r.text

#fix this apartment #
@app.route("/eatstreet/registerUser/<personAPI>/<opt>/<street>/<city>/<state>/<zipCode>")
def addAddress(personAPI, opt, street, city, state, zipCode):
    url = 'https://api.eatstreet.com/publicapi/v1/user/PERSONAPI/add-address?apiKey=' + \
    'PERSONAPI&aptNumber=' + person API + '(opt)' + '&streetAddress=' + street + '&city=' + \
    city + '&state=' + city + '&zip=' + zipCode
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95', "Content-Type": "application/json"} 
    r = requests.get(url, headers=headers)
    return r.text

@app.route("/eatstreet/registerUser/<name>/<address>/<zipCode>/<cvv>/<cardNumber>/<expirationMonth>/<expirationYear>")
def addCreditCard(name, address, zipCode, cvv, cardNumber, expirationMonth, expirationYear):
    url = 'https://api.eatstreet.com/publicapi/v1/user/PERSONAPI/add-card?apiKey=PERSONAPI&cardholderName=' + name + \
    '&cardholderStreetAddress=' + address + '&cardholderZip=' + zipCode + '&cvv=' + cvv + \
    '&cardNumber=' + cardNumber + '&expirationMonth=' + expirationMonth + '&expirationYear=' + expirationYear
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95', "Content-Type": "application/json"} 
    r = requests.get(url, headers=headers)
    return r.text

@app.route("/eatstreet/search/<address>")
def eatStreetLogin(email, password):
    url = 'https://api.eatstreet.com/publicapi/v1/signin?email=' + email + '&password=' + password
    headers = {'X-Access-Token': 'b7bcd5837cd7dd95', "Content-Type": "application/json"} 
    r = requests.get(url, headers=headers)
    return r.text

if __name__ == '__main__':
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0',port=port)
