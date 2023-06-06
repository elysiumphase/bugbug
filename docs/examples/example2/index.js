const debug = require('../../../src')('node-sparkline', 'green');

const options = {
  values: [1, 2, 3, 4, 5],
  width: 500,
  height: 500,
};

debug('everything\'s fine');
debug('process done');
debug('sparkline generated in SVG format,', 'additional stuff');
debug('options:', options);
