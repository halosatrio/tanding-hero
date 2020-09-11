import React, { useState } from "react";
import Modal from "react-modal";

import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";

import TabelHeroUser from "./TabelHeroUser";
import HeroUser from "./HeroUser";
import HeroLawan from "./HeroLawan";

import swords from "../assets/swords-icon1.svg";

Modal.setAppElement("#root");
const Versus = (props) => {
  const className = [props.className];
  const { heroLawan, heroUser } = props;

  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroLawan, setSshowHeroLawan] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [winLose, setWinLose] = useState("")

  const [heroUser1, heroUser2, heroUser3, heroUser4] = heroUser;

  const powerLevelUser = calculatePowerLevel(selectedHero);
  const powerLevelLawan = calculatePowerLevel(heroLawan);

  const hasilTanding = bandingUserLawan(powerLevelUser, powerLevelLawan);

  console.log("heroUser1 - Versus:", heroUser1);

  const handleSelectHeroUser = (hero) => {
    setShowTable(!showTable);
    setSshowHeroLawan(!showHeroLawan);
    setSelectedHero(hero);
    setTimeout(handleOpenModal, 500);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const modalStyles = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      padding: "40px 80px",
      border: "1px solid #ccc",
      background: "#fff",
      borderRadius: "15px",
      textAlign: "center",
    },
  };

  const showTableHeroUser = showTable ? "d-block" : "d-none";
  const showHeroUser = showTable ? "d-none" : "d-block";

  return (
    <div className={`versus ${className}`}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={modalStyles}
        className
      >
        <h2 className="mb-3">{hasilTanding}</h2>
        <button className="btn btn-secondary btn-sm" onClick={handleCloseModal}>
          close
        </button>
      </Modal>
      <div className="row justify-content-center my-4 align-items-center">
        <div className="col-5 col-lg-4">
          <TabelHeroUser
            heroUser1={heroUser1}
            heroUser2={heroUser2}
            heroUser3={heroUser3}
            heroUser4={heroUser4}
            handleClick={handleSelectHeroUser}
            showTableHeroUser={showTableHeroUser}
          />
          <HeroUser showHeroUser={showHeroUser} selectedHero={selectedHero} />
        </div>
        <div className="col-2">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-5 col-lg-4">
          <HeroLawan heroLawan={heroLawan} showHeroLawan={showHeroLawan} />
        </div>
      </div>
    </div>
  );
};

export default Versus;
