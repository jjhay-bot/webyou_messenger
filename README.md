# Growsari Web Mobile App

This project is a React-based web application, likely serving as a mobile-first interface for an e-commerce or payment platform. It utilizes Material UI for components, Apollo Client for GraphQL communication, and various integrations like Google Analytics and Facebook Pixel.

## Project Setup

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Environment Configuration:**
    This project uses a `src/config.template.js` file to generate `src/config.js` at build time or when manually triggered. The following environment variables are used:

    *   `REACT_APP_STAGE`: Specifies the current application stage (e.g., `development`, `staging`, `production`).
    *   `REACT_APP_QR_CODE`: Potentially a stringหรือ URL for a QR code used within the application.

    To set these variables for local development, you can create a `.env.local` file in the root directory:
    ```env
    REACT_APP_STAGE=development
    REACT_APP_QR_CODE=your_qr_code_value_here
    ```
    Then, run the `buildAssist` script (see below) to generate `src/config.js`.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode using the configuration possibly generated from `.env.development.local` (if `buildAssist` is run with it) or a default/committed `src/config.js`.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `npm run start:production`
Runs the app in development mode but attempts to use production-like settings by referencing `.env.production.local` for environment variables when running `npm start`.
```bash
env-cmd -f .env.production.local npm start
```
You would typically use this with a `buildAssist` command configured for production variables.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. This script should be preceded by a `buildAssist` run that uses the correct production environment variables.

### `npm run buildAssist`
This custom script generates the `src/config.js` file from `src/config.template.js` by injecting values from environment variables. It is typically used with `env-cmd` to specify which `.env` file to use. For example, to prepare for a local build using `.env.local`:
```bash
env-cmd -f .env.local node utils/buildAssist.js
```
Or, as defined in `package.json`:
```bash
npm run buildAssist
# This runs: env-cmd -f .env.local node utils/buildAssist.js
```
Ensure you run this script whenever environment variables need to be updated in the application's runtime configuration.

### `npm run serve`
Serves the static files from the `build` folder on port 3000. Useful for testing a production build locally.
```bash
serve -s build -l 3000
```

### `npm run lint`
Runs the ESLint checker to find and report issues in the codebase.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
Removes the single build dependency (`react-scripts`) and copies all configuration files and transitive dependencies into your project.

## Key Technologies

*   React
*   Material UI (MUI)
*   Apollo Client (GraphQL)
*   React Router
*   Firebase
*   Google Analytics
*   Facebook Pixel

## Further Learning

*   [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
*   [React documentation](https://reactjs.org/)
