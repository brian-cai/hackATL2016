import os
import psycopg2
import urlparse

#urlparse.uses_netloc.append("postgres")
#url = urlparse.urlparse("postgres://otznpabxwqvfru:w87uCxcfTnGwFFIR4AoEYOxb0Y@ec2-54-235-183-28.compute-1.amazonaws.com:5432/d2gc7aeiffud2r")
conn = psycopg2.connect("dbname='d2gc7aeiffud2r' host='ec2-54-235-183-28.compute-1.amazonaws.com' user='otznpabxwqvfru' password='w87uCxcfTnGwFFIR4AoEYOxb0Y' port=5432 sslmode=require")
cur = conn.cursor()
cur.execute("""INSERT INTO users VALUES (3, 'Dick','Djoaquin','Dpassword','Dicholas.joaquin@gmail.com','Dhttp://lol',false,NULL,ARRAY[0])""")
cur.execute("""SELECT * from users""")
print cur.fetchall()
