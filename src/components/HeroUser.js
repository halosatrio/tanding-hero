import React from "react";

const HeroUser = (props) => {
  const { showHeroUser, selectedHero } = props;

  return (
    <div className={`hero-lawan text-center ${showHeroUser}`}>
      {selectedHero ? (
        <>
          <img
            src={selectedHero.image}
            alt={selectedHero.nama}
            style={{ maxWidth: 400, height: "100%" }}
          />
          <h4>{selectedHero.nama}</h4>
        </>
      ) : (
        <p>No Hero Selected!</p>
      )}
    </div>
  );
};

export default HeroUser;
