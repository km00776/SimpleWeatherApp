module.exports = {
  get presets() {
    return require('./presets').ApiPresets;
  },

  get api() {
    return require('./helper');
  },
};
