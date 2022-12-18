# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Proposed structure
src<br/>
├──assets<br/>
├──components<br/>
├──constants<br/>
├──pages<br/>
├──services<br/>
├──stories<br/>
├──styles<br/>
└──utils<br/>
App.js<br/>

## Details of structure
| Folder name  | What is it used for |
| ------------- | ------------- |
| assets  | Contains all asset files |
| components  | Contains reusable components that are most often used to compose Feature or Page components |
| constants  | Contains reusable & immutable strings like URLs, Regex Patterns or just constant values |
| pages  | Contains all routing pages for a React project |
| services  | Contains all api service methods |
| stories  | A sample folder for storybookjs |
| styles  | Reusable or global styles (CSS) |
| utils  | Reusable utility functions |

## Assumptions made

1. There is no loading screen shown here, so I have added a landing screen and loading screen to prevent showing errors when attempting to query the api.
2. The error message text "No data found" will show regardless of error message sent from the backend ("Invalid params" / "No result") as this was requested in the frontend assignment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm i`

If you have node installed on your computer, this command will automatically download the node_modules for this project.

To download node, you can refer to [https://nodejs.org/en/](https://nodejs.org/en/) .

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
