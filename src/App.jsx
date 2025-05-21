import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/Home";
import Message from "./pages/Message";
import  GetUsers from "./pages/getUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}
export default App;