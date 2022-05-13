import React from "react";
import "../styles/HelloWorld.css";

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>
        My name is <span className="name">{this.props.theName}</span>
      </h1>
    );
  }
}

export default HelloWorld;
