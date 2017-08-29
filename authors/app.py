from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/authors-flask-sql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)

class Author(db.Model):
	__tablename__ = "authors"
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.Text)
	book = db.relationship('Book', backref='author', lazy='dynamic')

	def __init__(self, name):
		self.name = name

class Book(db.Model):
	__tablename__ = 'books'
	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.Text)
	author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))

@app.route('/')
def root():
	return redirect(url_for('index'))

@app.route('/authors', methods=["GET", "POST"])
def index():
	if request.method == "POST":
		db.add_author(request.form['name'])
		return redirect(url_for('index'))
	return render_template("index.html", authors=Author.query.all())

@app.route('/authors/new')
def new():
	return render_template("new.html")

@app.route('/authors/<int:id>/edit')
def edit(id):
	found_author = [author for author in author.id == id][0]
	return render_template('edit.html', author=found_author)

@app.route('/authors/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
	found_author = next(author for author in authors if author.id == id)
	if request.method == b"PATCH":
		found_author.name = request.form['name']
		return redirect(url_for('index'))
	if request.method == b"DELETE":
		authors.remove(found_author)
		return redirect(url_for('index'))
	return render_template('show.html', author=found_author)




if __name__ == "__main__":
	app.run(port=3000, debug=True)
