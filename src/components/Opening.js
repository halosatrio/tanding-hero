import React from "react";

import Button from "../components/Button";

import batman from "../assets/batman.svg";
import ironman from "../assets/ironman.svg";
import swords from "../assets/swords-icon1.svg";

const Opening = (props) => {
  const className = [props.className];
  const { handleStart } = props;

  return (
    <div className={`opening container ${className}`}>
      <div className="row justify-content-between my-4 align-items-center">
        <div className="col-md-3 mb-4">
          <img src={ironman} alt="batman" />
        </div>
        <div className="col-md-4 mb-4 mx-4">
          <img src={swords} alt="batman" />
        </div>
        <div className="col-md-3 mb-4">
          <img src={batman} alt="batman" />
        </div>
      </div>
      <div className="text-center my-3">
        <Button
          type="button"
          className="btn btn-danger btn-lg"
          style={{ paddingLeft: 50, paddingRight: 50 }}
          onClick={handleStart}
        >
          Start
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
