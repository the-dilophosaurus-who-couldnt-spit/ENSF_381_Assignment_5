from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

users = [
    {'username': "user1",
        'password': "pass1",
        'email': "example@gmail.com"
    }
        ]
products = [ 
    { 
        "id": 1, 
        "name": "Product 1", 
        "description": "Description for Product 1", 
        "price": 10.99, 
        "image": 'images/product1.png' 
    }, 
    { 
        "id": 2, 
        "name": "Product 2", 
        "description": "Description for Product 2", 
        "price": 20.99, 
        "image": 'images/product2.jpg' 
    }, 
    { 
        "id": 3, 
        "name": "Product 3", 
        "description": "Description for Product 3", 
        "price": 10.99, 
        "image": 'images/product3.jpg' 
    }, 
    { 
        "id": 4, 
        "name": "Product 4", 
        "description": "Description for Product 4", 
        "price": 10.99, 
        "image": 'images/product4.jpg' 
    }, 
    { 
        "id": 5, 
        "name": "Product 5", 
        "description": "Description for Product 5", 
        "price": 10.99, 
        "image": 'images/product5.jpg' 
    }, 
    { 
        "id": 6, 
        "name": "Product 6", 
        "description": "Description for Product 6", 
        "price": 10.99, 
        "image": 'images/product6.jpg' 
    }, 
    { 
        "id": 7, 
        "name": "Product 7", 
        "description": "Description for Product 7", 
        "price": 10.99, 
        "image": 'images/product7.jpg' 
    }, 
    { 
        "id": 8, 
        "name": "Product 8", 
        "description": "Description for Product 8", 
        "price": 10.99, 
        "image": 'images/product8.jpg' 
    }, 
    { 
        "id": 9, 
        "name": "Product 9", 
        "description": "Description for Product 9", 
        "price": 10.99, 
        "image": 'images/product9.jpg' 
    }, 
    { 
        "id": 10, 
        "name": "Product 10", 
        "description": "Description for Product 10", 
        "price": 10.99, 
        "image": 'images/product10.jpg' 
    } 
] 
############################# Helper functions #############################
def does_username_exist(userlist, username):
    for user in userlist:
        if user['username'] == username:
            return 1 #username exists
    return 0 #doesn't exist


############################# Routing #############################
@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    entered_username = data.get('username')
    entered_password = data.get('password')
    # Check if the entered username and password match any user in the user list
    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            return jsonify({"authenticated": True, "message": "Authentication successful"})
    return jsonify({"authenticated": False, "message": "Authentication failed. Incorrect username or password."})


@app.route('/signup', methods=['POST'])
def add_user():
    new_user = request.json
    if not does_username_exist(users, new_user['username']):
        
        users.append(new_user)
        return {'message': "User created Succefully" }, 201
    else:
        return {'message': "Username already in use" }, 406 #not acceptable

@app.route('/products', methods=['GET'])
def get_all_products():
    return jsonify(products)

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    product = next((p for p in products if p['id'] == product_id), None)
    if product:
        return jsonify(product)
    else:
        return jsonify({'message': 'Product not found'}), 404
 
##this is for testing purposes 
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)


if __name__ == "__main__":
    app.run(debug=True)