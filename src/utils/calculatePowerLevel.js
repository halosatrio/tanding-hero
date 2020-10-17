export function calculatePowerLevel(hero) {
  if (hero === null || undefined) {
    return null;
  }

  const intelligence = hero?.intelligence * 50;
  const strength = hero?.strength * 30;
  const speed = hero?.speed * 30;
  const durability = hero?.durability * 20;
  const power = hero?.power * 100;
  const combat = hero?.combat * 10;

  const powerLevel =
    intelligence + strength + speed + durability + power + combat;

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
