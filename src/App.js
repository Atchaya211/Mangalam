import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider, useUser } from "./UserContext";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
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
import VendorHome from "./VendorHome";
import VendorMobileVerification from "./VendorMobileVerification";
import VendorMailVerification from "./VendorMailVerification";
import VendorBgCheck from "./VendorBgCheck";
import MyAccountVendor from "./MyAccountVendor"
import EditProfileVendor from "./EditProfileVendor";
import "./style.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<ConditionalHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/LoginPage" element={<Login />} />
            <Route path="/VendorLoginPage" element={<VendorLogin />} />
            <Route path="/MyActivity" element={<MyActivity />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/DisplayVendors" element={<DisplayVendors />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/VendorMobileVerification" element={<VendorMobileVerification />} />
            <Route path="/VendorMailVerification" element={<VendorMailVerification />} />
            <Route path="/VendorBgCheck" element={<VendorBgCheck />} />
            <Route path="/VendorHome" element={<VendorHome />} />
            <Route path="/MyAccountVendor" element={<MyAccountVendor />} />
            <Route path="/EditProfileVendor" element={<EditProfileVendor />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

const ConditionalHome = () => {
  const { user } = useUser();

  if (user) {
    return user.role === "vendor" ? <VendorHome /> : <Home />;
  }

  return <Home />;
};

export default App;

