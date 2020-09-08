import React, { Component } from "react";
import axios from "axios";

import TitleText from "../components/TitleText";
import Opening from "../components/Opening";
import Versus from "../components/Versus";
import Footer from "../components/Footer";

import fakeHeroAPI from "../assets/fakeHeroAPI.json";

export class Tanding extends Component {
  state = {
    heroLawan: [],
    opening: true,
  };

  componentDidMount() {
    const idLawan = this.randomNumber(1, 46);

    const idUser = [
      this.randomNumber(1, 46),
      this.randomNumber(1, 46),
      this.randomNumber(1, 46),
      this.randomNumber(1, 46),
    ];

    this.getHeroLawan(idLawan);

    idUser.forEach((item, index) => {
      const hasil = "heroUser" + (index + 1);
      const hero = this.getHeroUser(item);
      this.setState({ [hasil]: hero });
    });
  }

  getHeroLawan = (id) => {
    const dbHero = fakeHeroAPI;

    const result = dbHero.find((h) => h.id === id);
    this.setState({
      heroLawan: {
        nama: result.name,
        image: result.images.md,
        intelligence: result.powerstats.intelligence,
        strength: result.powerstats.strength,
        speed: result.powerstats.speed,
        durability: result.powerstats.durability,
        power: result.powerstats.power,
        combat: result.powerstats.combat,
      },
    });
  };

  getHeroUser = (id) => {
    const dbHero = fakeHeroAPI;

    const result = dbHero.find((h) => h.id === id);
    const heroUser = {
      nama: result.name,
      image: result.images.md,
      intelligence: result.powerstats.intelligence,
      strength: result.powerstats.strength,
      speed: result.powerstats.speed,
      durability: result.powerstats.durability,
      power: result.powerstats.power,
      combat: result.powerstats.combat,
    };

    return heroUser;
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  handleStart = () => {
    this.setState({ opening: !this.state.opening });
  };

  handleReplay = () => {
    this.setState({ heroLawan: [], dataUser: [] });

    const idLawan = [this.randomNumber(1, 50)];

    const idUser = [
      this.randomNumber(1, 100),
      this.randomNumber(1, 100),
      this.randomNumber(1, 100),
      this.randomNumber(1, 100),
    ];

    this.getHeroLawan([idLawan]);

    idUser.forEach((item, index) => {
      const hasil = "heroUser" + (index + 1);
      const hero = this.getHeroUser(item);
      this.setState({ [hasil]: hero });
    });
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

    console.log("heroUser-Tanding:", heroUser);

    return (
      <div className="container tanding px-5">
        <TitleText />
        <Opening className={showOpening} handleStart={this.handleStart} />
        <Versus
          className={showVersus}
          heroLawan={heroLawan}
          heroUser={heroUser}
        />
        <Footer />
      </div>
    );
  }
}

export default Tanding;
