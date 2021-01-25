import React, { useState, useEffect } from "react";

import Button from "./Button";

import man from "../assets/man.png";

const HeroLawan = (props) => {
  const { heroLawan, showHeroLawan, powerLevelLawan } = props;

  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    setShowStats(false);
  }, []);

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className="hero-lawan text-center">
      <h5 className="text-center mb-2">Opponent Character</h5>
      {showHeroLawan ? (
        <figure>
          <img src={heroLawan.image} alt={heroLawan.name} />
          <h4>{heroLawan.name}</h4>
          <Button
            type="button"
            className="btn btn-secondary mt-3"
            onClick={handleShowStats}
          >
            show stats
          </Button>
          {showStats ? (
            <div className="stats-lawan text-left mt-2">
              <ul>
                <li>Total Power Level: {powerLevelLawan}</li>
                <li>Intelligence: {heroLawan.intelligence}</li>
                <li>Strength: {heroLawan.strength}</li>
                <li>Speed: {heroLawan.speed}</li>
                <li>Durability: {heroLawan.durability}</li>
                <li>Power: {heroLawan.power}</li>
                <li>Combat: {heroLawan.combat}</li>
              </ul>
            </div>
          ) : null}
        </figure>
      ) : (
        <div className="gray-man">
          <img src={man} alt="man" />
        </div>
      )}
    </div>
  );
};

export default HeroLawan;
