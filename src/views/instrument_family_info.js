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

  //title
  this.addContent('h2', info.name);

  //description
  this.addContent('h3', info.description);

  //instruments
  this.addContent('ul', "Instruments:")

};

InstrumentFamilyInfo.prototype.addContent = function (tag, text) {
  const content = document.createElement(tag);
  content.textContent = text;
  this.container.appendChild(content);
};



module.exports = InstrumentFamilyInfo;
