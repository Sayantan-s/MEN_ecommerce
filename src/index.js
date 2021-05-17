import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'styles/index.css'
import 'styles/fonts.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

ReactDOM.render(
  <BrowserRouter>
     <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
     </Provider>
   </BrowserRouter>,
  document.getElementById('root')
);
  

reportWebVitals();
