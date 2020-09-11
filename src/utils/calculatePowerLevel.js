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
  // {hero ? (return powerLevel) : return null}
  return powerLevel;
}

export function bandingUserLawan(heroUser, heroLawan) {
  if (heroUser > heroLawan) {
    return "You Win";
  } else {
    return "You Lose";
  }
}
