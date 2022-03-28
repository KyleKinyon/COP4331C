# Setup

## Dependencies

Make sure to run `npm install -D` so that you install of the packages including the dev dependencies.

## Required Files

After doing that, you will need to create a file titled `.env.local` in the same folder that you have the `package-lock.json` file.

Here's what must be put in the file (check discord for the actual details):

```
REACT_APP_BACKEND_ADDRESS={backend url or localhost if testing with a local backend}
```

This allows for the frontend to know where to make its API calls.

## Running

Run the command `npm start` to run the server in development mode. If you're building a production build then use `npm build`.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
