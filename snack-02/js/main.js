const squads = [
  {
    name: "The Red Soxs",
    points: 0,
    fouls: 0,
  },
  {
    name: "Dominators",
    points: 0,
    fouls: 0,
  },
  {
    name: "The Underrated",
    points: 0,
    fouls: 0,
  },
  {
    name: "Champions",
    points: 0,
    fouls: 0,
  },
  {
    name: "High Carpets",
    points: 0,
    fouls: 0,
  },
];

const newArr = [];

for (const squad of squads) {
  squad.fouls = Math.floor(Math.random() * 100);
  squad.points = Math.floor(Math.random() * 100);

  newArr.push({
    name: squad.name,
    fouls: squad.fouls,
  });
}

console.log(newArr);
