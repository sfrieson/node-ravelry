var qs = require('querystring');

exports.plusSeparated = function (arr) {
  return arr.reduce(function (list, item) { return list + item + '+' }, '').replace(/\+$/,'');
};

exports.urlBuilder = function (base, endpoint, params) {
  if (params) params = '?' + qs.stringify(params);
  console.log('Built:', base + endpoint + params);
  return base + endpoint + params;
};
