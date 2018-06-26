const PubSub = require("../helpers/pub_sub.js");

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('InputView:planet-inputted', (evt) => {
    const selectedPlanet = evt.detail;
    this.publishPlanetDetail(selectedPlanet);
  });
}

SolarSystem.prototype.publishPlanetDetail = function(selectedPlanet){
 const planetFound = this.planets.find(function(element){
   return element.name == selectedPlanet;
 })
  console.log(planetFound);
  PubSub.publish('Planets:selected-planet', planetFound)
};




module.exports = SolarSystem;
