# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Clone the Repository
`git clone https://github.com/AH-bi/ahmed_binous_fe.git`
`cd ahmed_binous_fe`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Connecting to Backend

This frontend interacts with a backend API and MySQL server hosted on PythonAnywhere. The backend repository URL can be found [here](https://github.com/AH-bi/ahmed_binous_be.git).

If you want to use your own backend API, modify the proxy configuration in the `package.json` file with your API's IP address. Update the `proxy` field accordingly:

```json
"proxy": "https://your-backend-api-ip/"
```

## Hosting Information

This frontend is hosted on Netlify. The deployed URL can be found in the `url.txt`` file.

