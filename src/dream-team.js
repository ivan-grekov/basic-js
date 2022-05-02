const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .filter((member) => typeof member === "string")
      .map((el) => {
        if (Array.isArray(el)) {
          return el.join(" ").trim().substring(0, 1).toUpperCase();
        }
        if (typeof el === "object") {
          return el["0"].trim().substring(0, 1).toUpperCase();
        }
        if (el !== " " || el !== null) {
          return el.trim().substring(0, 1).toUpperCase();
        }
        return false;
      })
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }
  return false;
}

module.exports = {
  createDreamTeam,
};
