import React, { Component } from "react";

export class Tanding extends Component {
  componentDidMount() {
    const lawan1 = this.randomNumber(1, 731);
    const lawan2 = this.randomNumber(1, 731);
    const lawan3 = this.randomNumber(1, 731);

    const idLawan = [lawan1, lawan2, lawan3];
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return <div></div>;
  }
}

export default Tanding;
