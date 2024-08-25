from Flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

# Sample data
def get_user_data():
    return {
        "status": "success",
        "data": {
            "users": [
                {
                    "id": 1,
                    "name": "John Doe",
                    "email": "john.doe@example.com",
                    "created_at": datetime.now().isoformat()
                },
                {
                    "id": 2,
                    "name": "Jane Smith",
                    "email": "jane.smith@example.com",
                    "created_at": datetime.now().isoformat()
                }
            ]
        }
    }

# Define the endpoint
@app.route('/api/users', methods=['GET'])
def users():
    data = get_user_data()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)