import React from "react";
import propTypes from "prop-types";

import Button from "./Button";

import { LoveIcon } from "../assets/icons";

const Footer = (props) => {
  return (
    <footer className="bg-white text-center">
      <hr />
      {props.isTanding ? (
        <Button
          type="link"
          className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
          href="/about"
        >
          Let's see how this app works
        </Button>
      ) : (
        <Button
          type="link"
          className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
          href="/"
        >
          Back to the Match
        </Button>
      )}
      <div className="container my-4">
        <p>
          Built with <LoveIcon color="crimson" /> by{" "}
          <a href="https://halosatrio.now.sh">Satrio Bayu Aji</a> @2020
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isTanding: propTypes.bool,
};

export default Footer;
