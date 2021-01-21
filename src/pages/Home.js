import React from "react";

import TitleText from "../components/TitleText";
import Opening from "../components/Opening";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container tanding">
      <TitleText />
      <Opening />
      <Footer isTanding />
    </div>
  );
};

export default Home;
