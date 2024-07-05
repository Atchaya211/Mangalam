import React from "react";
import "./style.css";
import Nav from "./Nav";
// import LogInPage from "./LoginPage";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import AppPage from "./App";
import Home from './Home';
import About from './About';
import Login from "./LoginPage";
import VendorLogin from "./VendorLogin";
import MyAccount from "./MyAccount";
import EditProfile from "./EditProfile";
import Booking from "./Booking";
import MyActivity from "./MyActivityPage";
import Services from "./Services";
import DisplayVendors from "./displayVendors";
import Help from "./Help";
import WishList from "./WishList";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/LoginPage" element={<Login/>}/>
        <Route path="/VendorLoginPage" element={<VendorLogin/>}/>
        <Route path="/MyActivity" element={<MyActivity/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
        <Route path="/EditProfile" element={<EditProfile/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/DisplayVendors" element={<DisplayVendors/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/WishList" element={<WishList/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
