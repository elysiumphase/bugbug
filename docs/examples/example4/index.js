const getDebugger = require('../../../src');

const debugHttp = getDebugger('http', 'green');
const debugGzip = getDebugger('gzip', 'lightMagenta');
const debugGzipCompression = getDebugger('gzip:compression', 'cyan');
const debugGzipHelper = getDebugger('gzip:helper', 'yellow');

debugHttp('debugging http');
debugGzip('gzip compression...');
debugGzip('compressing file');
debugGzipCompression('data being processed');
debugGzipHelper('data successfully parsed');
debugGzipCompression('data compressed');
debugGzip('gzip compression done');
