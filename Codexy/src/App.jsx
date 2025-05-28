import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/registration/register.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="registration/" element={<Register />} />
    </Routes>
  );
}

export default App;