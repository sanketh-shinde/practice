import { Component, createRef } from "react";

class UseRefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleClick() {
    alert(`Welcome ${this.inputRef.current.value}`);
  }

  render() {
    return (
      <>
        <input type="text" placeholder="Enter your name" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}

export default UseRefDemo;
