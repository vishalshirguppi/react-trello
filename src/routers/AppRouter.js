import React from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import createHistory from "history/createBrowserHistory";
import ContactUs from '../components/ContactUs';
import { Router, Route, Switch } from "react-router-dom";
import ProjectDetail from '../components/ProjectDetail';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ProjectList} exact={true} />
        <Route path="/project/:id" component={ProjectDetail}/>
        <Route path="/" component={ContactUs}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
