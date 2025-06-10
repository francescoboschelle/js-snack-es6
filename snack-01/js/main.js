const bikes = [
  {
    name: "Grandma's bike",
    weight: 580,
  },
  {
    name: "Midnight Rider",
    weight: 320,
  },
  {
    name: "Beginner's Ez Start",
    weight: 400,
  },
  {
    name: "Speedy Gonzales",
    weight: 190,
  },
  {
    name: "Electric Wheels",
    weight: 680,
  },
];

const lightestBike = () => {
  let bike = "unknown";
  for (let i = 0; i < bikes.length; i++) {
    for (let e = 0; e < bikes.length; e++) {
      if (bikes[i].weight < bikes[e].weight) {
        bike = bikes[i].name;
      }
    }
  }
  return bike;
};

alert(`La bici meno pesante é: ${lightestBike()}`);
