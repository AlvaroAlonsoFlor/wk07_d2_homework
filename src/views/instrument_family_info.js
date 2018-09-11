const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInfo = function (container) {
  this.container = container;
};

InstrumentFamilyInfo.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:family-info', (event) => {
    const info = event.detail;
    this.renderInfo(info);

  })
};

InstrumentFamilyInfo.prototype.renderInfo = function (info) {
  console.log(info.name);
  //title
  const title = document.createElement('h2')
  title.textContent = info.name;
  this.container.appendChild(title);

  //description
  const description = document.createElement('h3')
  description.textContent = info.description;
  this.container.appendChild(description);

  //

};

// const infoParagraph = document.createElement('p');
//   infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
//   this.container.innerHTML = '';
//   this.container.appendChild(infoParagraph);

module.exports = InstrumentFamilyInfo;
