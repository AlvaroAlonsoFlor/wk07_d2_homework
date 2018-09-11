const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInfo = function (container) {
  this.container = container;
};

InstrumentFamilyInfo.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:family-info', (event) => {
    const info = event.detail
    console.log(event.detail);

  })
};

module.exports = InstrumentFamilyInfo;
