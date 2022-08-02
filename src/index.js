import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import App from './App.jsx';


// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
import App from './App.jsx';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
>>>>>>> dev
);