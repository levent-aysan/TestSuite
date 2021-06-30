const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    "..",
    "fruition-app/cypress/config",
    `${file}.json`
  );

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.fileConfig || "test";

  return getConfigurationByFile(file);
};
