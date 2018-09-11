const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all', (event) => {
    console.log(event);
    const allInstrumentFamilies = event.detail;
    console.log('event detail:', event.detail);
    this.populate(allInstrumentFamilies);
  });

  // this.element.addEventListener('change', (event) => {
  //   const selectedFamily = event.target.value;
  //   console.log(selectedFamily);
  //   PubSub.publish('SelectView:selected', selectedFamily);
  // });

};

SelectView.prototype.populate = function (instrumentFamilies) {
  instrumentFamilies.map( (item) => {
    const option = document.createElement('option');
    option.textContent = item;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
