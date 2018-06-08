import React from "react";
import { connect } from "react-redux";
import CreateNewBoard from "./CreateNewBoard";
import store from "../store/store";
import { addList } from '../actions/projects';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      error: ""
    };
  }

  componentDidMount() {
    const activeProject = this.props.projects.filter(project => {
      return project.id === this.props.match.params.id;
    });
    if (activeProject["0"]) {
      this.setState(() => ({ title: activeProject["0"].title }));
    } else {
      this.setState(() => ({ error: "Project Not Found!" }));
    }
  }
  onSubmit = listTitle => {
    const list = {
      listTitle: listTitle,
      projectId: this.props.match.params.id
    };
    store.dispatch(addList(list));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error && <h3>{this.state.error}</h3>}
        {this.state.title && <h3>{this.state.title}</h3>}
        <CreateNewBoard onSubmit={this.onSubmit} label="Task" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectDetail);
