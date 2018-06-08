import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import store from "./store/store";
import { addProject } from "./actions/projects";
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';

// store.dispatch(addProject());
// store.dispatch(addProject({"id":5, title: "My Second Project"}));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
    );
  }
}

export default App;
