import React, { useState } from "react";

import TabelHeroUser from "./TabelHeroUser";
import HeroUser from "./HeroUser";
import HeroLawan from "./HeroLawan";

import swords from "../assets/swords-icon1.svg";

const Versus = (props) => {
  const className = [props.className];
  const { heroLawan, heroUser } = props;

  const [showTable, setShowTable] = useState(true);
  const [selectedHero, setSelectedHero] = useState(null);
  const [showHeroLawan, setSshowHeroLawan] = useState(false);

  const [heroUser1, heroUser2, heroUser3, heroUser4] = heroUser;

  console.log("heroUser1 - Versus:", heroUser1);

  const handleSelectHeroUser = (hero) => {
    setShowTable(!showTable);
    setSshowHeroLawan(!showHeroLawan);
    setSelectedHero(hero);
  };

  const showTableHeroUser = showTable ? "d-block" : "d-none";
  const showHeroUser = showTable ? "d-none" : "d-block";

  return (
    <div className={`versus container ${className}`}>
      <div className="row justify-content-between my-4 align-items-center">
        <div className="col-md-5 mb-4">
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
        <div className="col-md-2 mb-4">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-md-5 mb-4">
          <HeroLawan heroLawan={heroLawan} showHeroLawan={showHeroLawan} />
        </div>
      </div>
    </div>
  );
};

export default Versus;
