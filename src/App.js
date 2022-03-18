import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import {BrowserRouter,Route,Routes,NavLink, Navigate} from "react-router-dom"
import About from "./components/pages/About";
import Colors from "./components/pages/Colors";
import Home from './components/pages/Home'
import Navbar from "./components/Navbar";
import Contacts from "./components/pages/Contacts";
import Posts from "./components/pages/Posts";
import { useState } from "react";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

function App() {
  const [isloggedin,setisloggedin]=useState(false)
  
  console.log(isloggedin)
  const data={
    'name':'please login first'
  }
  return (
      <>

      
      <BrowserRouter>
      <Navbar isloggedin={isloggedin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Colors" element={isloggedin?<Colors/>:<Navigate to="/Login" state={data}/>}/>
           <Route path="/About" element={<About/>} /> 
           <Route path="/Contacts" element={<Contacts/>} /> 
           <Route path="/Login" element={<Login setisloggedin={setisloggedin}/>} /> 
           <Route path="/Logout" element={<Logout setisloggedin={setisloggedin} />} /> 
           <Route path="/Posts/:category/:id" element={<Posts/>} /> 
           <Route path="*" element={<h1>Error 404 page not found</h1>} /> 
        </Routes>
      </BrowserRouter>
      
      


      </>
  );
}

export default App;
