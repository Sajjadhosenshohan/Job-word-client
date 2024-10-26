# Jobword - Junior MERN Stack Developer Job Assessment Project

## Live Link: [https://job-word.web.app](https://job-word.web.app)

## Server side repository: [https://github.com/Sajjadhosenshohan/Job-word-server](https://github.com/Sajjadhosenshohan/Job-word-server)





## Project Overview

This project is part of a job assessment for BJET Inc., aimed at evaluating the skills of a junior MERN stack developer. The task is to build a visually appealing and functional web application for online group study assignments using MongoDB, Express.js, React, and Node.js. The application should allow users to create, manage, and grade assignments while ensuring responsive design and proper validation.


## Technologies

- Frontend: React, React Router Dom, TailwindCSS, Daisy ui, React Hook Form, Swiper,Vite

- Backend: Node.js, Express, MongoDB, Cookie-Parser, JSON Web Token (JWT),
- Authentication: Firebase

## Features

- Jwt: Secure login and registration using email/password and Google authentication using Jwt.

- CRUD Operations: Assignment creator can update, delete his/her assignment but Assignment Examiner can  read, give mark using patch operation Job Assignment.

- Assignment Management, Secure Authentication and Filtered Assignment Viewing :  Users and Examiner can easily add and update their list of tourist spots using a simple form.


## Run Locally

### Client Side (Frontend)

Clone the repository:

```bash
git clone https://github.com/Sajjadhosenshohan/Job-word-client

```

Go to the project directory:

```bash
  cd Job-word-client
```

Install dependencies:

```bash
  npm install
```

Start the server:

```bash
  npm run start
```
### Environment Variables(Client side)

`MONGODB_URI`= your_mongodb_uri
`FIREBASE_API_KEY`=your_firebase_api_key
`FIREBASE_AUTH_DOMAIN`=your_firebase_auth_domain
`FIREBASE_PROJECT_ID`=your_firebase_project_id
`FIREBASE_STORAGE_BUCKET`=your_firebase_storage_bucket
`FIREBASE_MESSAGING_SENDER_ID`=your_firebase_messaging_sender_id
`FIREBASE_APP_ID`=your_firebase_app_id



### Server Side (Backend)

Clone the repository:

```bash
git clone https://github.com/Sajjadhosenshohan/Job-word-server

```

Go to the project directory:

```bash
  cd Job-word-server
```

Install dependencies:

```bash
  npm install
```

Start the server:

```bash
  nodemon index.js
```
### Environment Variables(Server side)

`BASE_URL` "https://job-word-server.vercel.app"

`PORT`=5000

`MONGODB_URI` = "mongodb+srv://:@cluster0.jzvet.mongodb.net/?retryWrites=true&w=majority"

`DB_USER`=your_mongodb_user_name

`DB_PASS`= your_mongodb_password


## Authors

- [@Sajjadhosenshohan](https://github.com/Sajjadhosenshohan)


## Feedback

If you have any feedback, please reach out to us at mdshohansajjad@gmail.com

