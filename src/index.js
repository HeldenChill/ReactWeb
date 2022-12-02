import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import reportWebVitals from './reportWebVitals';
import store from './features/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='home' element = {<Home />} />
        <Route path='services' element ={<Services />} />
        <Route path='products' element ={<Products />} />
        <Route path='sign-up' element = {<SignUp />} />
        <Route path='sign-in' element = {<SignIn />} />
      </Route>
    </Routes>
    </BrowserRouter>  
  </Provider>
  
  ,document.getElementById('root')
);

