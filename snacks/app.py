from flask import Flask 
from flask_sqlalchemy import flask_sqlalchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

__tablename__ = "snacks"

id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.Text)
 = db.Column(db.Integer)

def __init__(self, name, memory_in_gb):
	self.name = name
	

	def __repr__(self):
		return "This {} has {} "

if __name__ == '__main__'
	app.run(debug=True,port=3000)