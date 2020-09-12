export function calculatePowerLevel(hero) {
  if (hero === null || undefined) {
    return null;
  }

  const { intelligence, strength, speed, durability, power, combat } = hero;
  const powerLevel =
    intelligence * 50 +
    strength * 30 +
    speed * 30 +
    durability * 20 +
    power * 100 +
    combat * 10;

  if (isNaN(powerLevel) || powerLevel === null) {
    return 0;
  } else {
    return powerLevel;
  }
}

export function bandingUserLawan(heroUser, heroLawan) {
  if (heroUser > heroLawan) {
    return "You Win!";
  }
  if (heroUser < heroLawan) {
    return "You Lose!";
  }
  if (heroUser === heroLawan) {
    return "Draw!";
  }
}
