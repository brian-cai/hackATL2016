import psycopg2
import urlparse
from flask import Flask
from flask_cors import CORS, cross_origin
import os
app = Flask(__name__)
CORS(app)
#urlparse.uses_netloc.append("postgres")
#url = urlparse.urlparse("postgres://otznpabxwqvfru:w87uCxcfTnGwFFIR4AoEYOxb0Y@ec2-54-235-183-28.compute-1.amazonaws.com:5432/d2gc7aeiffud2r")

@app.route("/newUser/<eatStreetID>/<name>/<pictureLink>")
def newUserReg(eatStreetID, name, pictureLink):
    conn = psycopg2.connect("dbname='d2gc7aeiffud2r' host='ec2-54-235-183-28.compute-1.amazonaws.com' user='otznpabxwqvfru' password='w87uCxcfTnGwFFIR4AoEYOxb0Y' port=5432 sslmode=require")
    cur = conn.cursor()
    cur.execute("""SELECT * from newusers""")
    newId = len(cur.fetchall())+1
    if pictureLink == 'NULL':
        cur.execute("INSERT INTO newusers (id, eatstreetid, following, name) VALUES (%s,%s,%s,%s)",(str(newId), eatStreetID,"{-1}",name)) 
    else:
        cur.execute("INSERT INTO newusers VALUES (%s,%s,%s,%s,%s)",(str(newId),eatStreetID,"{-1}",name,pictureLink))
    #cur.execute(toExecute)
    conn.commit()
    cur.execute("""SELECT * FROM newusers WHERE id=""" + str(newId))
    return str(cur.fetchall()) 

@app.route("/retrieveUser/<eatStreetID>")
def retrieveUser(eatStreetID):
    conn = psycopg2.connect("dbname='d2gc7aeiffud2r' host='ec2-54-235-183-28.compute-1.amazonaws.com' user='otznpabxwqvfru' password='w87uCxcfTnGwFFIR4AoEYOxb0Y' port=5432 sslmode=require")
    cur = conn.cursor()
    cur.execute("SELECT * FROM newusers WHERE eatstreetid='%s'" + eatStreetID)
    return str(cur.fetchall()) 


if __name__ == '__main__':
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0',port=port)
    #app.run()

