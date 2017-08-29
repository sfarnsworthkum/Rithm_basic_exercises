import psycopg2

def connect():
	c = psycopg2.connect('dbname=flask-sql')
	return c 
 
def get_all_authors():
 	conn = connect()
 	cur = conn.cursor()
 	cur.execute("SELECT * FROM authors")
 	authors = cur.fetchall()
 	cur.close()
 	conn.close()
 	return authors
