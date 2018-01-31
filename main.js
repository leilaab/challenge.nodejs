// sub-module access
module.exports = {
    Bar: require('./lib1/Bar'),
    Presets: {
        legacy: require('./presets/legacy'),
        shades_classic: require('./presets/shades-classic'),
        shades_grey: require('./presets/shades-grey'),
        rect: require('./presets/rect')
    }
};