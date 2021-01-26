import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import * as getHero1 from "../store/get-hero1/actions";
import * as getHero2 from "../store/get-hero2/actions";
import * as getHero3 from "../store/get-hero3/actions";
import * as getHero4 from "../store/get-hero4/actions";
import * as getLawan from "../store/get-lawan/actions";
import { randomNumber } from "../utils/generateRandom";

// Components
import TitleText from "../components/TitleText";
import TabelHeroUser from "../components/TabelHeroUser";
import HeroUser from "../components/HeroUser";
import HeroLawan from "../components/HeroLawan";
import Button from "../components/Button";
import Footer from "../components/Footer";

import swords from "../assets/swords.png";
import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";

Modal.setAppElement("#root");

const Tanding = () => {
  // States
  const [id, setId] = useState([
    randomNumber(1, 731),
    randomNumber(1, 731),
    randomNumber(1, 731),
    randomNumber(1, 731),
    randomNumber(1, 731),
  ]);
  // const [generate, setGenerate] = useState(true);
  const [heroUser1, setHeroUser1] = useState([]);
  const [heroUser2, setHeroUser2] = useState([]);
  const [heroUser3, setHeroUser3] = useState([]);
  const [heroUser4, setHeroUser4] = useState([]);
  const [heroLawan, setHeroLawan] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroLawan, setShowHeroLawan] = useState(false);

  // Global Variables
  const dispatch = useDispatch();
  const { hero1, isLoading } = useSelector((state) => state.GetHero1);
  const { hero2 } = useSelector((state) => state.GetHero2);
  const { hero3 } = useSelector((state) => state.GetHero3);
  const { hero4 } = useSelector((state) => state.GetHero4);
  const { lawan } = useSelector((state) => state.GetLawan);

  // Hooks
  useEffect(() => {
    dispatch(getHero1.fetchData(id[0]));
    dispatch(getHero2.fetchData(id[1]));
    dispatch(getHero3.fetchData(id[2]));
    dispatch(getHero4.fetchData(id[3]));
    dispatch(getLawan.fetchData(id[4]));
  }, [dispatch, id]);

  useEffect(() => {
    setHeroUser1(hero1);
    setHeroUser2(hero2);
    setHeroUser3(hero3);
    setHeroUser4(hero4);
    setHeroLawan(lawan);
  }, [hero1, hero2, hero3, hero4, lawan]);

  // handler
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectHeroUser = (hero) => {
    setShowTable(!showTable);
    setShowHeroLawan(!showHeroLawan);
    setSelectedHero(hero);
    setTimeout(setModalIsOpen(true), 1000);
  };

  const handleRematch = () => {
    setShowTable(true);
    setShowHeroLawan(false);
    setSelectedHero(null);
    setId([
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
      randomNumber(1, 731),
    ]);
  };

  const powerLevelUser = calculatePowerLevel(selectedHero);
  const powerLevelLawan = calculatePowerLevel(heroLawan);
  const hasilTanding = bandingUserLawan(powerLevelUser, powerLevelLawan);
  const showTableHeroUser = showTable ? "d-block" : "d-none";
  const showHeroUser = showTable ? "d-none" : "d-block";

  return (
    <div className="versus">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
      >
        <h2 className="mb-3">{hasilTanding}</h2>
        <button className="btn btn-secondary btn-sm" onClick={handleCloseModal}>
          close
        </button>
      </Modal>
      <TitleText />
      <div className="row justify-content-center my-4 mx-0 px-1 align-items-center">
        <div className="col-5 col-lg-4">
          <TabelHeroUser
            heroUser1={heroUser1}
            heroUser2={heroUser2}
            heroUser3={heroUser3}
            heroUser4={heroUser4}
            handleClick={handleSelectHeroUser}
            showTableHeroUser={showTableHeroUser}
            loading={isLoading}
          />
          <HeroUser
            showHeroUser={showHeroUser}
            selectedHero={selectedHero}
            powerLevelUser={powerLevelUser}
          />
        </div>
        <div className="col-2 sword">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-5 col-lg-4">
          <HeroLawan
            heroLawan={heroLawan}
            showHeroLawan={showHeroLawan}
            powerLevelLawan={powerLevelLawan}
          />
        </div>
      </div>
      <div className="text-center mt-2 mb-4">
        <Button
          type="button"
          className="btn btn-danger btn-lg"
          style={{ paddingLeft: 50, paddingRight: 50 }}
          onClick={handleRematch}
        >
          R E M A T C H
        </Button>
      </div>
      <Footer isTanding />
    </div>
  );
};

export default Tanding;
