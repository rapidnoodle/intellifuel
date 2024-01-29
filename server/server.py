from flask import Flask, send_from_directory
import datetime
import os

x = datetime.datetime.now()

app = Flask(__name__, static_folder='..\\client\\build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '\\' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/data')
def get_time():
	return {
		'Name': 'geek', 
		'Age': '22',
		'Date': x, 
		'programming': 'python',
	}


if __name__ == '__main__':
	app.run(use_reloader=True, port=5000, threaded=True)
