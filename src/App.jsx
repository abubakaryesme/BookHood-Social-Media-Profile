import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./pages/layout/NavBar";
import Footer from "./pages/layout/Footer";
import Home from "./pages/social/Home";
import Profile from "./pages/social/Profile";
import Books from "./pages/books/Books";
import MyBooks from "./pages/books/MyBooks";
import Hoods from "./pages/hoods/Hoods";
import MyHoods from "./pages/hoods/MyHoods";
import Libraries from "./pages/libraries/Libraries";
import MyLibraries from "./pages/libraries/MyLibraries";
import About from "./pages/about/About";
import NotFound from "./pages/authentication/NotFound";
import MyAccount from "./pages/account/MyAccount";
import Notifications from "./pages/account/Notifications";
import LoginSignUp from "./pages/authentication/LoginSignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="pg-container">
        <div classname="wrap">
          <NavBar title={"Github Finder"} />
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/books" element={<Books />}></Route>
              <Route path="/my-books" element={<MyBooks />}></Route>
              <Route path="/hoods" element={<Hoods />}></Route>
              <Route path="/my-hoods" element={<MyHoods />}></Route>
              <Route path="/libraries" element={<Libraries />}></Route>
              <Route path="/my-libraries" element={<MyLibraries />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<LoginSignUp />}></Route>
              <Route path="/my-account" element={<MyAccount />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
