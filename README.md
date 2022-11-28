# aleannlab-test-task
AleannLab test task for Trainee Backend (Node.js) Developer

## Installation

```bash
$ npm install
```
The app requires PostgreSQL to be installed locally. Also you have to replace DB_PASSWORD variable in .env with your Postgres superuser password.

Then use the following commands to create a database, its schemas and populate it with a seed data:

```bash
$ npm run dbcreate
$ npm run migrate
$ npm run seed
```

## Seed data

The seed data includes 10 users with different ranks.

## Running the app

```bash
$ npm run dev
```

## Endpoints

GET /api/users/ - get list of all users.

PATCH /api/users/:id/edit - change username of the existing user by it's id, the body of the request should contain "username" key and the value of new username.

PATCH /api/users/:id/change - change rank of the existing user by it's id, the body of the request should contain "rank" key and the value of new rank.

POST /api/users/add - create a new user, the body of the request should contain the "username" and "rank" keys.

DELETE /api/users/delete - delete existing user by it's id.

## Web page

Web page of the app is available at http://localhost:5000/index.html. 
There is a table with users' data. To edit a username you should click on it and enter a new username. To change the rank of a user you should click on it and choose a new rank in the drop-down menu. Also you can delete a user by clicking on "Delete" button.
To add a new user you should enter it's username in the textfield with "Username" placeholder and it's rank in the textfield with "Rank" placeholder at the bottom of the table and click on "Add" button.
