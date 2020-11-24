const safe = require("../src/safetostream.json");

module.exports = (req, res) => {
  res.status(200).send(safe);
};
