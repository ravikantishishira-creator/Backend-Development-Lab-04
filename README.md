
# Lab 4: Registration, Login and JWT

## Student Details

- **Name:** Shishira Ravikanti
- **Registration Number:** 252U1R1218
- **Section:** [Enter your section]
- **Course:** Backend Development Fundamentals
- **Year:** II
- **Term:** II
- **Faculty:** Joel Prashanth D

## Live Link

Not deployed yet. The project is currently running locally.

## Project Description

This project implements user registration and login authentication using Node.js, Express.js, SQLite, bcrypt and JSON Web Tokens (JWT).

Passwords are securely hashed using bcrypt before storing them in the database. During login, the entered password is compared with the stored hash. If the credentials are valid, a JWT token is generated containing the username.

## Technologies Used

- Node.js
- Express.js
- SQLite
- bcrypt
- JSON Web Token (JWT)
- Postman

## Project Structure

```text
lab-04/
├── screenshots/
├── app.js
├── database.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Execution

### 1. Install dependencies

```bash
npm install
```

### 2. Run the server

```bash
node app.js
```

### 3. Server URL

```text
http://localhost:3000
```

### 4. Database

The SQLite database is automatically created when the application runs.

The JWT secret is currently defined as a constant in app.js for this lab exercise.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register a new user |
| POST | /login | Authenticate user and generate JWT token |

## Screenshots

### 1. Registration Successful

![Registration Success](screenshots/register-success.jpeg)

### 2. Registration Failed

![Registration Failure](screenshots/register-failure.jpeg)

### 3. Login Successful

![Login Success](screenshots/login-success.jpeg)

### 4. Login Failed

![Login Failure](screenshots/login-failure.jpeg)

### 5. JWT Decoded

![JWT Decoded](screenshots/jwt-decoded.jpeg)

## Security Features

- Passwords are stored as bcrypt hashes.
- Duplicate usernames are rejected.
- Invalid login credentials are rejected.
- JWT tokens are generated after successful authentication.
- Only the username is included in the custom JWT payload.
- Parameterized SQL queries are used to prevent SQL injection.

## Problems Faced and Solutions

1. Installed the required Node.js packages.
2. Configured SQLite database connectivity.
3. Implemented password hashing using bcrypt.
4. Generated JWT tokens after successful login.
5. Tested valid and invalid credentials using Postman.
6. Decoded JWT tokens using JWT.io.

## Conclusion

Successfully implemented a user registration and login authentication system using Node.js, Express.js, SQLite, bcrypt and JWT. Tested the APIs using Postman and verified the generated JWT token.
