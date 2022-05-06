import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/sign_up/SignUp";
import Login from "./pages/log_in/Login";
import LoggedIn from "./pages/logged-in/LoggedIn";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact"
import About from "./pages/about/About"
import Drop from "./pages/drop/Drop"
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
          <Route path="/drop" element={<Drop/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
