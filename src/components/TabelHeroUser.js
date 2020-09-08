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

  console.log("heroUser1-Tabel:", heroUser1);

  return (
    <table
      className={`table table-borderless text-center ${showTableHeroUser}`}
    >
      {heroUser1 ? (
        <tbody>
          <tr>
            <td>
              <img
                src={heroUser1.image}
                alt={heroUser1.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => handleClick(heroUser1)}
              />
            </td>
            <td>
              <img
                src={heroUser2.image}
                alt={heroUser2.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => handleClick(heroUser2)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={heroUser3.image}
                alt={heroUser3.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => handleClick(heroUser3)}
              />
            </td>
            <td>
              <img
                src={heroUser4.image}
                alt={heroUser4.name}
                style={{ maxWidth: 150, height: "100%" }}
                onClick={() => handleClick(heroUser4)}
              />
            </td>
          </tr>
        </tbody>
      ) : null}
    </table>
  );
};

export default TabelHeroUser;
