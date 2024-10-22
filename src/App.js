import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
