module.exports = {
  resolveArgs: function (order, args) {
    var sorted = [];
    for (var i = 0; args[i] !== undefined; i++) {
      var arg = args[i];
      for (var position = 0; order[position]; position++) {
        var desiredType = order[position];
        if (typeof arg === desiredType) { // eslint-disable-line
          sorted[position] = arg;
          break;
        }
      }
    }
    return sorted;
  }
};
