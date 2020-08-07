import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Header from "../common/Header";
import Courses from "../components/Courses";
import PageNotFound from "../common/PageNotFound";
import CoursePage from "../components/CoursePage";
import ManageCoursePage from "../components/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/CoursePage/:slug" component={CoursePage} />
        <Route path="/courses" component={Courses} />
        <Route path="/ManageCoursePage" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
