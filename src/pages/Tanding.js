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
    loading: true,
    opening: true,
  };

  async componentDidMount() {
    const idLawan = randomNumber(1, 563);
    const idUser = [
      randomNumber(1, 563),
      randomNumber(1, 563),
      randomNumber(1, 563),
      randomNumber(1, 563),
    ];

    const [
      heroLawan,
      heroUser1,
      heroUser2,
      heroUser3,
      heroUser4,
    ] = await Promise.all([
      getHeroLawan(idLawan),
      getHeroUser(idUser[0]),
      getHeroUser(idUser[1]),
      getHeroUser(idUser[2]),
      getHeroUser(idUser[3]),
    ]);

    this.setState({
      heroLawan,
      heroUser1,
      heroUser2,
      heroUser3,
      heroUser4,
      loading: false,
    });
  }

  handleStart = () => {
    this.setState({ opening: !this.state.opening });
  };

  handleResetHero = () => {
    this.setState({
      loading: true,
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
    this.setState({
      heroLawan,
      heroUser1,
      heroUser2,
      heroUser3,
      heroUser4,
      loading: false,
    });
  };

  render() {
    const {
      opening,
      loading,
      heroLawan,
      heroUser1,
      heroUser2,
      heroUser3,
      heroUser4,
    } = this.state;
    const heroUser = [heroUser1, heroUser2, heroUser3, heroUser4];

    const showOpening = opening ? "d-block" : "d-none";
    const showVersus = opening ? "d-none" : "d-block";

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
          loading={loading}
        />
        <Footer isTanding />
      </div>
    );
  }
}

export default Tanding;
