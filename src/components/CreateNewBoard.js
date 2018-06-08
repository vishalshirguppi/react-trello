import React, { Component } from "react";
import uuid from "uuid";

class CreateNewBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      error: ''
    };
  }
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title) {
      this.setState(() => ({
        error: "Please provide a Title for the Project"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit(this.state.title);
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder={this.props.label}
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <button>Add {this.props.label}</button>
        </form>
      </React.Fragment>
    );
  }
}

export default CreateNewBoard;
