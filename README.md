# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ERRORS AND SOLUTIONS
E: BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default. This is no longer the case. Verify if you need this module and configure a polyfill for it.
    https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5

E: transform class component to functional component
    - also: remove this and only use state.sth or count.sth etc., 
    - check how AddContact.js > input in form is transformed from class component to accept useState, useNavigate hooks

    https://www.tarmac.io/how-to-convert-a-react-class-component-to-a-function-component
E: passing state to Link 
    - first set state and pathname in Link in ContactCard
    - then import useLocation in ContactDetails and use this code to display state and props - now you can use it :
          const location = useLocation();
            console.log(location) <--here see the location object and all the information, and state is included in it
            const {email, name} = location.state; <--this can be anything, saves the state information into variables that will be reused further in code
    https://www.positronx.io/react-router-dom-send-or-get-props-state-with-link-tutorial/

E:instead of using constructor in functional component, set the initial state with useState hook, also use useLocation to get the state 
    https://stackoverflow.com/questions/59289536/how-to-initialize-the-react-functional-component-state-from-props


## RESOURCES
1. JSON server: imitate quick back-end for prototyping and mocking https://github.com/typicode/json-server
    - create a new folder 'server-api' in the same parent folder as our app and start a terminal for this folder
    - in this folder install json server: npm init --yes and then npm i --save json-server
    - create a db.json in this directory an populate it with some data you would need to use in you app - what we save these - here "contacts"  is also used in App.js when retrieving data from fake backed with axios get method - const retrieveContacts = async () => {
    const response = await api.get('/contacts'); 
    return response.data;
  }
    - from package.json scripts remove test and add "start": "json-server -p 3006 -w db.json";
    - then start this server in its terminal with npm start and go to the link
    - json server terminal will display all calls made to this server - put, get, delete

2. AXIOS: library used to make async requests to an API, return data from the API, and then do things with that data in our React application, communicates with the back end and helps you perform CRUD operations, instead of fetch or ajax
    - install it in the contact app terminal like: npm install axios
    - create a new directory 'api' in src folder, and in it create a folder contacts.js which will be our axios base file
    - in that file import axios and export default axios.create() which will take in an object with baseURL: our json-server url{baseuRL:'http://localhost:3006'}
    - the into our App.js import api from '../api/contacts.js'
    - then we can change the hooks that set local storage, to hooks that work with fake external files, and on our page we will see out data from out db.json file from json-server
    - you can check the json data in developer tools under network and select the contact folder to see what data we have - AXIOS GET, POST, DELETE... CALLS WILL CHANGE THIS FILE!! IN THE CONSOLE>NETWORK BUT ALSO IN OUR LOCAL FILE !! WHAAAT interesting


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
