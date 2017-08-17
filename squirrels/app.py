from flask import Flask, redirect, url_for, render_template, request
from flask_modus import Modus 
from squirrel import Squirrel


app = Flask(__name__)
modus = Modus(app)

rodger = Squirrel(name='rodger')
sue = Squirrel(name='sue')
patricia = Squirrel(name='patricia')

squirrels = [rodger,sue,patricia]

@app.route('/')
def root():
	return redirect(url_for('index'))

@app.route('/squirrels', methods=["GET", "POST"])
def index():
	if request.method == "POST":
		squirrels.append(Squirrel(request.form['name']))
		return redirect(url_for('index'))
	return render_template("index.html", squirrels=squirrels)

@app.route('/squirrels/new')
def new():
	return render_template("new.html")


@app.route('/squirrels/<int:id>/edit')
def edit(id):
	found_squirrel =[squirrel for squirrel in squirrels if squirrel.id == id][0]
	return render_template('edit.html', squirrel=found_squirrel)

@app.route('/squirrels/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
	found_squirrel = next(squirrel for squirrel in squirrels if squirrel.id == id)
	if request.method == b"PATCH":
		found_squirrel.name = request.form['name']
		return redirect(url_for('index'))
	if request.method == b"DELETE":
		squirrels.remove(found_squirrel)
		return redirect(url_for('index'))
	return render_template('show.html', squirrel=found_squirrel)



if __name__== "__main__":
	app.run(port=3000,debug=True)
