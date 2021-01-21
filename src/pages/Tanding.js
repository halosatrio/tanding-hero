import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import * as actions1 from "../store/get-hero1/actions";
import * as actions2 from "../store/get-lawan/actions";

// Components
import TitleText from "../components/TitleText";
import TabelHeroUser from "../components/TabelHeroUser";
import HeroUser from "../components/HeroUser";
import HeroLawan from "../components/HeroLawan";
import Button from "../components/Button";

import swords from "../assets/swords.png";
import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";

Modal.setAppElement("#root");

const Tanding = () => {
  // States
  const [heroUser1, setHeroUser1] = useState([]);
  const [heroLawan, setHeroLawan] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroLawan, setShowHeroLawan] = useState(false);

  // Global Variables
  const dispatch = useDispatch();
  const { data: hero1, isLoading } = useSelector((state) => state.GetHero1);
  const { data: lawan } = useSelector((state) => state.GetLawan);

  // Hooks
  useEffect(() => {
    dispatch(actions1.fetchData());
  });
  useEffect(() => {
    dispatch(actions2.fetchData());
  });

  useEffect(() => {
    setHeroUser1(hero1);
  }, [hero1]);
  useEffect(() => {
    setHeroLawan(lawan);
  }, [lawan]);

  // handler
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectHeroUser = (hero) => {
    setShowTable(!showTable);
    setShowHeroLawan(!showHeroLawan);
    setSelectedHero(hero);
    setTimeout(handleOpenModal, 1000);
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
      <div className="row justify-content-center my-4 align-items-center">
        <div className="col-5 col-lg-4">
          <TabelHeroUser
            heroUser1={heroUser1}
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
          onClick={null}
        >
          R E M A T C H
        </Button>
      </div>
    </div>
  );
};

export default Tanding;
