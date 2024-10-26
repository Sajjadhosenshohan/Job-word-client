# Jobword - Junior MERN Stack Developer Job Assessment Project

## Live Link: [https://job-word.web.app](https://job-word.web.app)

## Server side repository: [https://github.com/Sajjadhosenshohan/Job-word-server](https://github.com/Sajjadhosenshohan/Job-word-server)





## Project Overview

The JobWord project is a web application designed for online group study, where all registered users are considered friends and can collaborate on assignments. This application allows users to create, submit, and grade assignments within a community-like environment, promoting group study and interactive learning.


## Technologies

- `Frontend` : React, React Router Dom, TailwindCSS, Daisy ui, React Hook Form, Swiper,Vite

- `Backend` : Node.js, Express, MongoDB, Cookie-Parser, JSON Web Token (JWT),
- `Authentication` : Firebase

## Features

- `Assignment Creation and Management` => Users can easily create assignments with detailed specifications, including title, marks, thumbnail image URL, assignment level, description, difficulty level (Easy, Medium, Hard), and due date. Only the creator can update or delete their assignments, ensuring effective management.

- `Grading and Feedback System` => Users can view pending assignments from others and provide marks along with constructive feedback. This feature promotes collaboration and enhances the learning experience.

- `Search and Filter Functionality` => Users can search for assignments by name and filter them based on difficulty levels (Easy, Medium, Hard). This improves navigation and allows users to quickly find relevant assignments.

- `Personalized My Assignments Section` => A dedicated section where users can access all their submitted assignments, along with links to view the PDFs of their submissions. This feature provides easy access to past work and helps users track their progress efficiently.


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

