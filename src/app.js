const SelectView = require('./views/select_view.js');
const InstrumentFamilyInfo = require('./views/instrument_family_info.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  //select views
  const selectElement = document.querySelector('#instrument-families')
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
  console.log('select view:',selectView.element);

  //families
  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();




});
