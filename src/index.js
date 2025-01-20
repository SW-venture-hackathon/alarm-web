/* eslint-disable prettier/prettier */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { initializeGapiClient, loadGapi } from './utils/gapClient';

const startGapi = async () => {
  await initializeGapiClient();
};

loadGapi(startGapi); // Google API 로드 및 초기화

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
