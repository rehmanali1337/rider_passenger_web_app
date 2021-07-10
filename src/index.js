import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { mainStore } from './store/store'
import { GlobalContextValue, GlobalContext } from './context/GlobalContext'

ReactDOM.render(
  // <React.StrictMode>
  <GlobalContext.Provider value={GlobalContextValue}>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </GlobalContext.Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
