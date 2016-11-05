import requests

url = "https://api.yelp.com/v3/businesses/search?term=korean&location=Atlanta"
headers = {"Authorization": "Bearer ZBhBW-3hcpQxPNC0xiobU3wlTe1MtUk_Zo2EeBBV4vS0ZKu5aNVG0nYurjhrI1cOPd-jX2QUu4iMsg6Z6kN6Jc1a5Jrq78MxDg68Y_neaSg40HFS9kfvO7PJHVAdWHYx"}

r = requests.get(url, headers=headers)
print r.text
