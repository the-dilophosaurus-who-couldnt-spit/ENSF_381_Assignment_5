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
movies = [ 
    { 
        "id": 1, 
        "name": "Movie 1", 
        "description": "Description for Movie 1", 
        "price": 10.99, 
        "image": 'images/movie1.png',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": True}, {"number": 3, "available": False}]},
        ]
    },
    { 
        "id": 2, 
        "name": "Movie 2", 
        "description": "Description for Movie 2", 
        "price": 20.99, 
        "image": 'images/movie2.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 3, 
        "name": "Movie 3", 
        "description": "Description for Movie 3", 
        "price": 10.99, 
        "image": 'images/movie3.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 4, 
        "name": "Movie 4", 
        "description": "Description for Movie 4", 
        "price": 10.99, 
        "image": 'images/movie4.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 5, 
        "name": "Movie 5", 
        "description": "Description for Movie 5", 
        "price": 10.99, 
        "image": 'images/movie5.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 6, 
        "name": "Movie 6", 
        "description": "Description for Movie 6", 
        "price": 10.99, 
        "image": 'images/movie6.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 7, 
        "name": "Movie 7", 
        "description": "Description for Movie 7", 
        "price": 10.99, 
        "image": 'images/movie7.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 8, 
        "name": "Movie 8", 
        "description": "Description for Movie 8", 
        "price": 10.99, 
        "image": 'images/movie8.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 9, 
        "name": "Movie 9", 
        "description": "Description for Movie 9", 
        "price": 10.99, 
        "image": 'images/movie9.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    }, 
    { 
        "id": 10, 
        "name": "Movie 10", 
        "description": "Description for Movie 10", 
        "price": 10.99, 
        "image": 'images/movie10.jpg',
        "seatmap": [
            {"row": "A", "seats": [{"number": 1, "available": False}, {"number": 2, "available": True}, {"number": 3, "available": True}]},
            {"row": "B", "seats": [{"number": 1, "available": True}, {"number": 2, "available": False}, {"number": 3, "available": True}]},
        ]
    } 
]
# Helper functions
def does_username_exist(userlist, username):
    for user in userlist:
        if user['username'] == username:
            return 1 #username exists
    return 0 #doesn't exist


#Routing
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
        return {'message': "User created Successfully" }, 201
    else:
        return {'message': "Username already in use" }, 406 #not acceptable

@app.route('/movies', methods=['GET'])
def get_all_movies():
    return jsonify(movies)

@app.route('/movies/<int:movie_id>', methods=['GET'])
def get_movie_by_id(movie_id):
    movie = next((p for p in movies if p['id'] == movie_id), None)
    if movie:
        return jsonify(movie)
    else:
        return jsonify({'message': 'Movie not found'}), 404
    
@app.route('/movies/<int:movie_id>/seatmap', methods=['GET'])
def get_seatmap_for_movie(movie_id):
    movie = next((m for m in movies if m['id'] == movie_id), None)
    if not movie:
        return jsonify({'message': 'Movie not found or invalid ID'}), 404
    if 'seatmap' not in movie:
        return jsonify({'message': 'Seatmap not found'}), 404
    return jsonify({'rows': movie['seatmap']})

#this is for testing purposes 
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)


if __name__ == "__main__":
    app.run(debug=True)