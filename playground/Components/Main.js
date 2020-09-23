import React, { Component } from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={"To do"} />
        <List tasks={["Mow the lawn", "Take a nap!", "Wash the car"]} />
        <Title title={"To do later"} />
        <List tasks={["Go to bed", "Read a book!", "Dry the car"]} />
      </div>
    );
  }
}

export default Main;
