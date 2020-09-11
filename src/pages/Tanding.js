import React, { Component } from "react";

import TitleText from "../components/TitleText";
import Opening from "../components/Opening";
import Versus from "../components/Versus";
import Footer from "../components/Footer";

import { getHeroLawan, getHeroUser } from "../services/getHero";
import { randomNumber } from "../utils/generateRandom";

export class Tanding extends Component {
  state = {
    heroLawan: [],
    heroUser1: [],
    heroUser2: [],
    heroUser3: [],
    heroUser4: [],
    opening: true,
  };

  async componentDidMount() {
    const idLawan = randomNumber(1, 731);
    const idUser = [
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
    ];

    const data = await getHeroLawan(idLawan);
    this.setState({ heroLawan: data });

    const heroUser1 = await getHeroUser(idUser[0]);
    const heroUser2 = await getHeroUser(idUser[1]);
    const heroUser3 = await getHeroUser(idUser[2]);
    const heroUser4 = await getHeroUser(idUser[3]);
    this.setState({ heroUser1, heroUser2, heroUser3, heroUser4 });
  }

  handleStart = () => {
    this.setState({ opening: !this.state.opening });
  };

  handleResetHero = () => {
    this.setState({
      heroLawan: [],
      heroUser1: [],
      heroUser2: [],
      heroUser3: [],
      heroUser4: [],
    });
  };

  handleHeroRematch = (
    heroLawan,
    heroUser1,
    heroUser2,
    heroUser3,
    heroUser4
  ) => {
    this.setState({ heroLawan, heroUser1, heroUser2, heroUser3, heroUser4 });
  };

  render() {
    const {
      opening,
      heroLawan,
      heroUser1,
      heroUser2,
      heroUser3,
      heroUser4,
    } = this.state;
    const heroUser = [heroUser1, heroUser2, heroUser3, heroUser4];

    const showOpening = opening ? "d-block" : "d-none";
    const showVersus = opening ? "d-none" : "d-block";

    console.log("heroLawan-Tanding:", heroLawan);
    console.log("heroUser1-Tanding:", heroUser1);

    return (
      <div className="container tanding">
        <TitleText />
        <Opening className={showOpening} handleStart={this.handleStart} />
        <Versus
          className={showVersus}
          heroLawan={heroLawan}
          heroUser={heroUser}
          handleResetHero={this.handleResetHero}
          handleHeroRematch={this.handleHeroRematch}
        />
        <Footer />
      </div>
    );
  }
}

export default Tanding;
