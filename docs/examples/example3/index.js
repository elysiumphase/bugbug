const debug = require('../../../lib')();

const options = {
  values: [1, 2, 3, 4, 5],
  width: 500,
  height: 500,
};

debug('main debugger is debugging');
debug('in red color if terminal allows it');
debug('options:', options);
