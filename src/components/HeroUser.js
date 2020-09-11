import React from "react";

const HeroUser = (props) => {
  const { showHeroUser, selectedHero } = props;

  return (
    <div className={`hero-user text-center ${showHeroUser}`}>
      {selectedHero ? (
        <figure>
          <img src={selectedHero.image} alt={selectedHero.name} />
          <h4>{selectedHero.name}</h4>
        </figure>
      ) : (
        <p>No Hero Selected!</p>
      )}
    </div>
  );
};

export default HeroUser;
