const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ViewIntro = require('./views/view_intro.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();
  const planetClicked = new ViewIntro();
  planetClicked.bindEvents();
});
