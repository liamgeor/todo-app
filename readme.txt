MERN Setup

Frontend:
    npx create-react-app ./
    npm install axios moment redux redux-thunk
    delete and recreate src folder
    index.js

Backend:
    npm init -y
    npm install cors express mongoose nodemon
    package.json add  "type": "module",  "scripts": {
     "start": "nodemon index.js"
     },
    index.js