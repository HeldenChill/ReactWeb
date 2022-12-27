// App.js
import "./App.css";
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Accounts from "./components/pages/Accounts";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* Public link */}
          <Route path='home' element = {<Home />} />
          <Route path='sign-in' element = {<SignIn />} />

          {/* Protected link */}
          <Route element={<RequireAuth />}>
            <Route path='services' element ={<Services />} />
            <Route path='products' element ={<Products />} />      
            <Route path='accounts' element={<Accounts/> }/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}