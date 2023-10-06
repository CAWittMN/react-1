const addCommas = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

module.exports = addCommas;
