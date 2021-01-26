import React from "react";
import propTypes from "prop-types";

import Button from "./Button";

import { LoveIcon } from "../assets/icons";

function Home() {
  return (
    <Button
      type="link"
      className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
      href="/about"
    >
      Let's see how this app works
    </Button>
  );
}

function Tanding() {
  return (
    <>
      <Button type="link" style={{ color: "crimson" }} href="/">
        Back to Home
      </Button>
      <br />
      <Button
        type="link"
        className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
        href="/about"
      >
        Let's see how this app works
      </Button>
    </>
  );
}

function About() {
  return (
    <Button
      type="link"
      className="btn btn-outline-secondary mt-3 px-4 py-2 font-weight-bolder"
      href="/"
    >
      Back to Home
    </Button>
  );
}

const Footer = (props) => {
  return (
    <footer className="bg-white text-center">
      <hr />
      {props.isHome && <Home />}
      {props.isTanding && <Tanding />}
      {props.isAbout && <About />}
      <div className="container my-4">
        <p>
          Built with <LoveIcon color="crimson" /> by{" "}
          <a href="https://halosatrio.now.sh">Satrio Bayu Aji</a> @2020 - 2021
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isTanding: propTypes.bool,
};

export default Footer;
