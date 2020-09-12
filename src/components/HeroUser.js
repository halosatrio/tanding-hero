import React, { useState } from "react";

import Button from "./Button";

const HeroUser = (props) => {
  const { showHeroUser, selectedHero, powerLevelUser } = props;

  const [showStats, setShowStats] = useState(false);

  const handleShowStats = () => {
    setShowStats(!showStats);
  };

  return (
    <div className={`hero-user text-center ${showHeroUser}`}>
      <h5 className="text-center mb-2">Your Character</h5>
      {selectedHero ? (
        <figure>
          <img src={selectedHero.image} alt={selectedHero.name} />
          <h4>{selectedHero.name}</h4>
          <Button
            type="button"
            className="btn btn-secondary mt-3"
            onClick={handleShowStats}
          >
            show stats
          </Button>
          {showStats ? (
            <div className="stats-user text-left mt-2">
              <ul>
                <li>Total Power Level: {powerLevelUser}</li>
                <li>Intelligence: {selectedHero.intelligence}</li>
                <li>Strength: {selectedHero.strength}</li>
                <li>Speed: {selectedHero.speed}</li>
                <li>Durability: {selectedHero.durability}</li>
                <li>Power: {selectedHero.power}</li>
                <li>Combat: {selectedHero.combat}</li>
              </ul>
            </div>
          ) : null}
        </figure>
      ) : (
        <p>No Hero Selected!</p>
      )}
    </div>
  );
};

export default HeroUser;
