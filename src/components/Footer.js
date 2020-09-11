import React from "react";

import Button from "./Button";

import { LoveIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-white">
      <hr />
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col text-center copyrights">
            Built with <LoveIcon color="crimson" /> by{" "}
            <Button
              isExternal
              type="link"
              href="https://halosatrio.now.sh"
              target="_blank"
            >
              Satrio Bayu Aji
            </Button>{" "}
            @2020
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
