import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Count extends Component {
  state = {
    count: 1
  };

  onClick = number => {
    this.setState(prev => ({ count: prev.count + number }));
  };

  render() {
    const { count } = this.state;
    return <div>Count {count}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.countRef = createRef();
  }

  handleClick = () => {
    this.countRef.current.onClick(1);
    console.log(this.countRef);
  };

  render() {
    return (
      <div className="App">
        <Count ref={this.countRef} />
        <button onClick={this.handleClick}> Increment </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
