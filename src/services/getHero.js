import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export async function getHeroLawan(id) {
  try {
    const response = await axios(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`,
      {
        method: "GET",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.md,
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
  try {
    const response = await axios(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`,
      {
        method: "GET",
      }
    );
    return {
      name: response.data.name,
      image: response.data.image.md,
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
