import React, { Component } from "react";
import "./style.scss"

const USER = {
  name: "Oleg Zaiats",
  gender: "male",
  age: 33,
  profession: "programmer"
};

const Welcome = (props) => (<h3>Hello, {props.user.name}</h3>);

class Clock extends Component {

  state = {
    date: new Date()
  };

  componentDidMount() {
    console.log(this);
    this.timerId = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.date.toLocaleTimeString()}</span>
        <br/>
        <span>{this.props.message("I am shown from child to parent")}</span>
      </div>
    )
  }

}

class Home extends Component {

  static showMessage(text) {
    return text;
  }

  render() {
    return (
      <div>
        <Welcome user={USER}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloads.
        </p>
        <Clock message={Home.showMessage}/>
      </div>
    )
  }
}

export default Home