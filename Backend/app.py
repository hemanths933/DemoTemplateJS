from flask import Flask
from flask import request
from flask_cors import CORS
from flask import jsonify
import random
from waitress import serve

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/sample')
def sample():
    return "Hello"

@app.route('/sample1', methods=['POST'])
def sample1():
    request_content = request.json
    print(request_content)
    names_list = ['Hemanth', 'KVB', 'Supreeth', 'KMTH']
    return jsonify({'data': random.choices(names_list, k=100)})
    
if __name__ == '__main__':
   serve(app.run(host='0.0.0.0', port=8020, debug=True))
