import React from "react";

import Button from "../components/Button";
import { GitHubIcon } from "../assets/icons";

const About = () => {
  return (
    <div className="text-center mt-5">
      <h1>About</h1>
      <p>
        This project was built for practice purposes using{" "}
        <strong>Context API</strong> by React.
      </p>

      <Button
        type="link"
        isExternal
        className="btn btn-secondary"
        href="https://github.com/AlexSegen/react-shopping-cart"
      >
        <GitHubIcon width={"18px"} />{" "}
        <span className="ml-2 mr-4">Visit Repo</span>
      </Button>
    </div>
  );
};

export default About;
