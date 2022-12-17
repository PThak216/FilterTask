import "./App.css";
import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { HashRouter } from "react-router-dom";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logouts" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={0}
        theme="colored"
      />
    </>
  );
}

export default App;
