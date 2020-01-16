# Chat-app
Full stack chat app with React, Redux, Express and Socket.IO

## Deployed

https://incredible-chatapp.herokuapp.com/

## Running the application

Clone the repo, and run `npm install` on both, root and client directory. <br />
Once the dependencies are installed, run `npm start` on root directory to start the backend server, and on client to start the frontend.

The app will require .env file on root with MONGODB_URI and PORT values in order to work.

## Available scripts

### Client

`npm start`

Runs the app in the development mode. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run build`

Builds the app for production to the `build` folder.

### Backend

`npm start`

Runs the backend in the production mode. <br />
No logging will be available.

`npm run watch`

Runs the backend in the development mode <br />
Nodemon will monitor changes in the code, and refresh server accordingly. Morgan logger will also give details on incoming requests.