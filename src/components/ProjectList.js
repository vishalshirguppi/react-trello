import React, { Component } from "react";
import CreateNewBoard from "./CreateNewBoard";
import store from "../store/store";
import { addProject } from "../actions/projects";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ProjectList extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = projectTitle => {
    store.dispatch(addProject(projectTitle));
  };
  renderProjectList = () => {
    return (
      <ul>
        {this.props.projects.map(project => {
          return (
            <li key={project.id}>
              <Link to={`/project/${project.id}`}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <React.Fragment>
        <p>Project list will go here.</p>
        <CreateNewBoard onSubmit={this.onSubmit} label="Project" />
        {this.renderProjectList()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);
