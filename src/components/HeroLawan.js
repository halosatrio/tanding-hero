import React from "react";

const HeroLawan = (props) => {
  const { nama, image, stats } = props;

  return (
    <div className="hero-lawan">
      <img src={image} alt={nama} style={{ maxWidth: 150 }} />
      <h4>{nama}</h4>
      {stats ? (
        <ul>
          <li>combat: {stats.combat}</li>
          <li>durability: {stats.durability}</li>
          <li>intelligence: {stats.intelligence}</li>
          <li>power: {stats.power}</li>
          <li>speed: {stats.speed}</li>
          <li>strength: {stats.strength}</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroLawan;
