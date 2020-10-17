let config = require('../config');

checkEnv(config, "MODBOT");

function checkEnv(config, prefix) {
    for (let key in config) {
        let envString = prefix + "_" + key.toUpperCase()
        if (typeof (config[key]) === 'object') {
            config[key] = checkEnv(config[key], envString);
        }

        if (envString in process.env) {
            config[key] = process.env[envString];
        }
    }
    return config;
}

module.exports = config;
