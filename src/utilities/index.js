var qs = require('querystring');

exports.plusSeparated = function (arr) {
  var list = '';
  for (var i = 0; i < arr.length; i++) {
    list += arr[i];
    if (arr[i + 1]) list += '+';
  }
  return list;
};

exports.urlBuilder = function (base, endpoint, params) {
  if (params) params = '?' + qs.stringify(params);
  console.log('Built:', base + endpoint + params);
  return base + endpoint + params;
};
