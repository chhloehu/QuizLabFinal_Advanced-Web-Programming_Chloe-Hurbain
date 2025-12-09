# QuizLabFinal_Advanced-Web-Programming_Chloe-Hurbain
# Canada Provinces CRUD Project

## Description
This is a simple Node.js project using **Express** and **MySQL** to perform basic CRUD (Create, Read, Update, Delete) operations on a database of Canadian provinces. The project allows you to add, view, update, and delete provinces with fields such as `name`, `capital`, `population`, and `area`.

## Technologies Used
- **Node.js** – JavaScript runtime for building the server
- **Express** – Web framework for handling routes
- **MySQL** – Database for storing province data (via XAMPP)
- **phpMyAdmin** – GUI tool to manage the MySQL database
- **Postman** – Optional tool to test POST, PUT, and DELETE requests
- **Browser** – For testing GET requests

## Project Structure
project-folder/ <br> 
├─ index.js # Main server file<br> 
├─ package.json # Node.js project config<br> 
└─ README.md # Project documentation<br> 


## How to Run
1. Make sure **MySQL** (via XAMPP) is running.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install express mysql
// start the server
node index.js
// open your browser and visit 
http://localhost:3000/


Use Postman to test adding, updating, or deleting provinces using the following routes:
* POST /add – Add a province
* GET /provinces – List all provinces
* GET /provinces/:id – View a province by ID
* PUT /provinces/:id – Update a province
* DELETE /provinces/:id – Delete a province

## Chloé Hurbain - Group B - ILAC & EFREI 
