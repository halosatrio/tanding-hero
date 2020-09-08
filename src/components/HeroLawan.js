import React from "react";

import man from "../assets/man.png";

const HeroLawan = (props) => {
  const { heroLawan, showHeroLawan } = props;

  return (
    <div className="hero-lawan justify-content-end">
      {showHeroLawan ? (
        <figure>
          <img src={heroLawan.image} alt={heroLawan.nama} />
          <h4>{heroLawan.nama}</h4>
        </figure>
      ) : (
        <div
          className="gray-man"
          style={{
            backgroundColor: "gray",
            width: 380,
            height: 480,
            borderRadius: 15,
          }}
        >
          <img src={man} alt="man" />
        </div>
      )}
    </div>
  );
};

export default HeroLawan;
