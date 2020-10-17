import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export async function getHeroLawan(id) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  try {
    const response = await axios(
      `${proxyurl}https://superheroapi.com/api/${key}/${id}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.url,
      intelligence: response.data.powerstats.intelligence,
      strength: response.data.powerstats.strength,
      speed: response.data.powerstats.speed,
      durability: response.data.powerstats.durability,
      power: response.data.powerstats.power,
      combat: response.data.powerstats.combat,
    };
  } catch (error) {
    console.error("Can't access api. Error: " + error);
  }
}

export async function getHeroUser(id) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  try {
    const response = await axios(
      `${proxyurl}https://superheroapi.com/api/${key}/${id}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.url,
      intelligence: response.data.powerstats.intelligence,
      strength: response.data.powerstats.strength,
      speed: response.data.powerstats.speed,
      durability: response.data.powerstats.durability,
      power: response.data.powerstats.power,
      combat: response.data.powerstats.combat,
    };
  } catch (error) {
    console.error("Can't access api. Error: " + error);
  }
}
