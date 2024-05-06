function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const map = new Map();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      map.set(secret[i], (map.get(secret[i]) || 0) + 1);
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (secret[i] !== guess[i] && map.has(guess[i]) && map.get(guess[i]) > 0) {
      cows++;
      map.set(guess[i], map.get(guess[i]) - 1);
    }
  }
  return `${bulls}A${cows}B`;
}
