const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected-planet', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The planet ${planet.name} is amazing, it has a orbit of ${planet.orbit}. its days last ${planet.day} and it has ${planet.moons} moons`;
  const planetPicture = document.createElement('img');
  planetPicture.src = planet.image;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  this.container.appendChild(planetPicture);
};

module.exports = PlanetInfoView;
