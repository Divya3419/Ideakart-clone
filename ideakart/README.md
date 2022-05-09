:link: https://singup-login-data-fetching.netlify.app \
This react app is a sign up/ login portal. Sign up details are stored in local storage.\
Different pages are presented to the user depending on authorization status.\
Unauthorized users are restricted from viewing certain pages.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all required dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!\

### About app

- Users have to enter their email id, password, confirm password, and gender to sign up.
- The data is validated and stored in a local variable.
- user can log in by verifying the email id and password.
- Redux is used for state management. Axios is used to fetch data from third-party API.
- Unauthorized users are restricted from viewing specific pages.
