from flask import Flask, request, send_from_directory
from chatbot import ask_iris
import datetime
import os

x = datetime.datetime.now()

app = Flask(__name__, static_folder='..\\client\\build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != '' and os.path.exists(app.static_folder + '\\' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/iris', methods=['POST'])
def iris():
		request_data = request.get_json()
		if not request_data or not request_data['message']:
				return {
						'message': 'Error: Invalid request!',
				}
		return {
				'message': ask_iris(request_data['message']),
		}


if __name__ == '__main__':
	app.run(use_reloader=True, port=5000, threaded=True)
