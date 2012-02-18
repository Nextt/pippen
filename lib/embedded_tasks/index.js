module.exports = (function () {
  return {
    default: [ this.autotest ],
    autotest: require('./autotest')
  };
})();