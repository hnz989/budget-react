/*
1. i removed one of them in every files containing the double semi colon ;;
    - `\node_modules\semantic-ui-css\components\step.min.css`
    - `\node_modules\semantic-ui-css\components\step.css`
    - `\node_modules\semantic-ui-css\semantic.min.css`
    - `\node_modules\semantic-ui-css\semantic.css`
2. i have cleaned the cache folders
    - `\node_modules\.cache\default-development`
    - `\node_modules\.cache\babel-loader`
3. i commented all the css rules in /src/App.css (otherwise i got a white page)
4. restart the dev server (npm start in my case)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
