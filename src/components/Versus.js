import React from "react";

import TabelHeroUser from "./TabelHeroUser";
import HeroUser from "./HeroUser";
import HeroLawan from "./HeroLawan";

import swords from "../assets/swords-icon1.svg";

const Versus = (props) => {
  const className = [props.className];
  const { heroLawan, heroUser } = props;

  const [heroUser1, heroUser2, heroUser3, heroUser4] = heroUser;

  console.log("heroUser1 - Versus:", heroUser1);

  return (
    <div className={`versus container ${className}`}>
      <div className="row justify-content-between my-4 align-items-center">
        <div className="col-md-auto mb-4">
          <TabelHeroUser
            heroUser1={heroUser1}
            heroUser2={heroUser2}
            heroUser3={heroUser3}
            heroUser4={heroUser4}
          />
        </div>
        <div className="col-md-2 mb-4">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-md-5 mb-4">
          {/* <HeroLawan
            nama={heroLawan.nama}
            image={heroLawan.image}
            intelligence={heroLawan.intelligence}
            strength={heroLawan.strength}
            speed={heroLawan.speed}
            durability={heroLawan.durability}
            power={heroLawan.power}
            combat={heroLawan.combat}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Versus;
