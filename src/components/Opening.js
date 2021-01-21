import React from "react";

import Button from "../components/Button";

import batman from "../assets/batman.png";
import ironman from "../assets/ironman.png";
import swords from "../assets/swords.png";

const Opening = () => {
  return (
    <div className={`opening`}>
      <div className="row justify-content-around my-4 align-items-center">
        <div className="col-5 col-lg-4 opening-kiri">
          <img src={ironman} alt="batman" />
        </div>
        <div className="col-2">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-5 col-lg-4">
          <img src={batman} alt="batman" />
        </div>
      </div>
      <div className="text-center my-3">
        <Button
          type="link"
          className="btn btn-danger btn-lg"
          style={{ paddingLeft: 50, paddingRight: 50 }}
          href="/tanding"
        >
          S T A R T
        </Button>
      </div>
      <h3 className="text-center">
        Superhero Match using{" "}
        <a href="https://www.superheroapi.com/">Superhero-API</a>
      </h3>
      <h6 className="text-center">
        Both your character and the opponent character are generated randomly
      </h6>
    </div>
  );
};

export default Opening;
