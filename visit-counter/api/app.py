import os
from flask import Flask, jsonify
import redis

app = Flask(__name__)

redis_host = os.environ.get('REDIS_HOST', 'redis')
redis_port = int(os.environ.get('REDIS_PORT', 6379))
r = redis.Redis(host=redis_host, port=redis_port, decode_responses=True)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@app.route('/visits', methods=['GET', 'OPTIONS'])
def visits():
    count = r.incr('visits')
    return jsonify(visits=count)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

