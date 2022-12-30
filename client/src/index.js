import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import App from './App';
import store from './features/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     {/* <AuthProvider> */}
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
     {/* </AuthProvider>   */}
    </BrowserRouter>  
  </Provider>
  
  ,document.getElementById('root')
);

