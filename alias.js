/**
 * Alias keys
 * @param {object} object - The object to resolve aliases of.
 */
function alias(object) {
  let map = {};

  for (item in object) {
    map[item] = item;
    for (alias in object[item].aliases) {
      map[object[item].aliases[alias]] = item;
    }
  }

  return (item) => {
    return object[map[item]];
  }
};


module.exports = alias;
