import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './counterstore'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}> {/* Wrap the App component with Provider and pass the store */}
    <App />
  </Provider>
);


reportWebVitals();
