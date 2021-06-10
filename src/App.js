import Login from "./components/login/Login";
import Footer from "./components/shared/footer/Footer";
import Header from "./components/shared/header/Header";
import TaskManager from "./components/taskManager/TaskManager";
import Register from "./components/register/Register"
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import TaskDetails from "./components/taskManager/taskDetails/TaskDetails";
import CustomPagination from "./components/pagination/Pagination";



function App() {
  return (
    <div className="container appContainer">
      <div className="row customHeader">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row m-5">
        <div className="col m-5">
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tasks" exact component={TaskManager} />
            <Route path="/tasks/:id" component={TaskDetails} />
            <Route path="/**" component={PageNotFound} />

          </Switch>
        </div>
      </div>
      <CustomPagination />
      <div className="row customFooter">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
