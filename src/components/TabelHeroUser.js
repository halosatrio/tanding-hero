/* eslint-disable no-lone-blocks */
import React from "react";

const TabelHeroUser = (props) => {
  const {
    heroUser1,
    heroUser2,
    heroUser3,
    heroUser4,
    handleClick,
    showTableHeroUser,
  } = props;

  // const heroItems = [heroUser1, heroUser2, heroUser3, heroUser4];

  console.log("heroUser1-Tabel:", heroUser1);

  return (
    <div className={`tabel-hero ${showTableHeroUser}`}>
      <h5 className="text-center mb-3">Select Your Character</h5>
      {heroUser1 ? (
        <div className="row row-cols-2 px-2 px-sm-2 px-md-3">
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser1.image}
              alt={heroUser1.nama}
              onClick={() => handleClick(heroUser1)}
            />
            <p>{heroUser1.nama}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser2.image}
              alt={heroUser2.nama}
              onClick={() => handleClick(heroUser2)}
            />
            <p>{heroUser2.nama}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser3.image}
              alt={heroUser3.nama}
              onClick={() => handleClick(heroUser3)}
            />
            <p>{heroUser3.nama}</p>
          </div>
          <div className="col text-center px-1 px-sm-2">
            <img
              src={heroUser4.image}
              alt={heroUser4.nama}
              onClick={() => handleClick(heroUser4)}
            />
            <p>{heroUser4.nama}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TabelHeroUser;

{
  /* <div className={`row row-cols-2 ${showTableHeroUser}`}>
      {heroUser1
        ? heroItems.map((item, index) => (
            <div key={index} className="col">
              <img
                src={item.image}
                alt={item.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => handleClick(item)}
              />
            </div>
          ))
        : null}
    </div> */
}
