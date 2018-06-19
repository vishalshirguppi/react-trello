import React from "react";
import { connect } from "react-redux";
import CreateNewBoard from "./CreateNewBoard";
import store from "../store/store";
import { addList } from "../actions/projects";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      error: "",
      activeProject: {}
    };
  }

  componentDidMount() {
    const activeProject = this.props.projects.filter(project => {
      return project.id === this.props.match.params.id;
    });
    this.setState(() => ({ activeProject: activeProject["0"] }));
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

  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  renderLists = () => {
    const activeProject = this.props.projects.filter(project => {
      return project.id === this.props.match.params.id;
    });
    if (!this.isEmpty(activeProject["0"].data)) {
      return (
        <ul>
          {Object.keys(activeProject["0"].data).map((key, index) => {
            return <li key={key}>{activeProject["0"].data[key].title}</li>;
          })}
        </ul>
      );
    }else {
      return (<p>Add a Task List to this Project</p>);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error && <h3>{this.state.error}</h3>}
        {this.state.title && <h3>{this.state.title}</h3>}
        <CreateNewBoard onSubmit={this.onSubmit} label="Task" />
        {this.renderLists()}
        {/* {console.log(this.state.activeProject, "activeProject")} */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectDetail);
