import os
import psycopg2
import urlparse

urlparse.uses_netlock.append("postgres")
url = urlparse.urlparse(os.environ["DATABASE_URL"])

conn = psycopg2.connect(
    database=url.path[1:],
    user=url.username,
    password=url.password.
    host=url.hostname,
    post=url.port
)
