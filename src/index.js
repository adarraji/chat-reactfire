import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig =
{
  apiKey: "AIzaSyCDWLvWFGopxBt_w6hFKBcNtxR23kwOvwI",
  authDomain: "chat-64fb5.firebaseapp.com",
  projectId: "chat-64fb5",
  storageBucket: "chat-64fb5.appspot.com",
  messagingSenderId: "321175385761",
  appId: "1:321175385761:web:e48b81fe19d2e98b17e2e0"
};


root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
