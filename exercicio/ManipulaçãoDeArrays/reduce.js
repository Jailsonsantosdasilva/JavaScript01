// reduce

  const rockets = [
    {country: "Russia", lanches: 32},
    {country: "US", lanches: 23},
    {country: "China", lanches: 16},
    {country: "Europe", lanches: 7},
    {country: "India", lanches: 4},
    {country: "Japan", lanches: 3}
  ]

const totalLauncher = rockets.reduce((prevVal, elem) => prevVal + elem.lanches,0);

console.log(totalLauncher)