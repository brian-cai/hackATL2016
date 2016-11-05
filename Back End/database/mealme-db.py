import os
import psycopg2
import urlparse

urlparse.uses_netloc.append("postgres")
url = urlparse.urlparse(os.environ["DATABASE_URL"])

try:
    conn = psycopg2.connect(database=url.path[1:], user=url.username, password=url.password, host=url.hostname, post=url.port)
    print "!!!"
    print conn
except:
    print "?"
