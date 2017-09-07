from flask_wtf import FlaskForm
from wtforms import StringField, validators

class UserForm(FlaskForm):
	first_name = StringField('first name', [validators.Length(min=1)])
	last_name = StringField('last name', [validators.Length(min=1)])

class DeleteForm(FlaskForm):
	pass
	