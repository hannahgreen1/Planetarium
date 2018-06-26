const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ViewIntro = require('./views/view_intro.js');
const ViewResult = require('./views/view_result.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();


  const planetClicked = new ViewIntro();
  planetClicked.bindEvents();

  const planetDetails = document.querySelector(".planet-details");
  const planetFinal = new ViewResult(planetDetails);
  planetFinal.bindEvents();


});
