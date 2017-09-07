from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from project import app

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/personalproject"
app.config["SECRET_KEY"]="hello"
db = SQLAlchemy(app)
modus = Modus(app)

if __name__ == '__main__':
	app.run(debug=True, port=3000)
