import os
import psycopg2
import urlparse

urlparse.uses_netloc.append("postgres")
url = urlparse.urlparse("postgres://otznpabxwqvfru:w87uCxcfTnGwFFIR4AoEYOxb0Y@ec2-54-235-183-28.compute-1.amazonaws.com:5432/d2gc7aeiffud2r")
try:
    conn = psycopg2.connect( database=url.path[1:], user=url.username, password=url.password, host=url.hostname, post=url.port)
except:
    print "At least you tried"
