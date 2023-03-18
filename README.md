# Chat-app
Full stack chat app with React, Redux, Socket.IO, Express and MongoDB

## Deployed

https://chat-app-ovoq.onrender.com/

## Running the application

Clone the repo and run `npm install` on root directory. <br />
Once the dependencies are installed, run `npm run dev:node` on root directory to start the node backend server, and `npm run dev:react` to start the React frontend.

The app will require .env file on root with following values in order to work:

- INLINE_RUNTIME_CHUNK
    - set as false
- REACT_APP_SOCKET_ENDPOINT
    - endpoint for the socket to connect to
- PORT
- NODE_PORT
- MONGODB_URI
    - for connecting to MongoDB


## Available scripts

### Client

`npm run dev:react`

Runs the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`

Builds the app for production to the `build` folder.

### Node

`npm run dev:node`

Runs the node in development mode. <br />
Nodemon will monitor changes in the code, and refresh server accordingly. Morgan logger will also give details on incoming requests.