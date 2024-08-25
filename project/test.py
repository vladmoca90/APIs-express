import json
from datetime import datetime

# Sample data for the API
data = {
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

# Convert Python dictionary to JSON
json_data = json.dumps(data, indent=4)

# Print JSON data
print(json_data)

# {
#     "status": "success",
#     "data": {
#         "users": [
#             {
#                 "id": 1,
#                 "name": "John Doe",
#                 "email": "john.doe@example.com",
#                 "created_at": "2024-08-25T14:23:07.217396"
#             },
#             {
#                 "id": 2,
#                 "name": "Jane Smith",
#                 "email": "jane.smith@example.com",
#                 "created_at": "2024-08-25T14:23:07.217396"
#             }
#         ]
#     }
# }
