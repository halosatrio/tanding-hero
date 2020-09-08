import React from "react";

import Button from "./Button";

const TabelHeroUser = (props) => {
  const { heroUser1, heroUser2, heroUser3, heroUser4 } = props;

  console.log("heroUser1-Tabel:", heroUser1);

  return (
    <table className="table table-bordered">
      {heroUser1 ? (
        <tbody>
          <tr>
            <td>
              <img
                src={heroUser1.image}
                alt={heroUser1.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => console.log("clicked")}
              />
            </td>
            <td>
              <img
                src={heroUser2.image}
                alt={heroUser2.name}
                style={{ maxWidth: 150, height: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={heroUser3.image}
                alt={heroUser3.name}
                style={{ maxWidth: 150, height: "100%" }}
              />
            </td>
            <td>
              <img
                src={heroUser4.image}
                alt={heroUser4.name}
                style={{ maxWidth: 150, height: "100%" }}
              />
            </td>
          </tr>
        </tbody>
      ) : null}
    </table>
  );
};

export default TabelHeroUser;
