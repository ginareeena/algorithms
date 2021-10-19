import React, {useState} from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleState: "ON",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggleState === "ON") {
      this.setState({toggleState: "OFF"});
    } else {
      this.setState({toggleState: "ON"});
    }
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.toggleState}</button>;
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
