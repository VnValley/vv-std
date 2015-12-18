var utils       = require('vv-std-utils');
var Sequelize   = require('sequelize');

module.exports = function (config) {
    var manager         = new utils.Manager();
    var sequelizeConfig = config.sequelize;

    utils.Lodash.forEach(sequelizeConfig.drivers, function (driverConfig, driverAlias) {

        var connection = new Sequelize(
            driverConfig.database,
            driverConfig.username,
            driverConfig.password,
            driverConfig
        );

        manager.extend(driverAlias, connection);
    });

    manager.setDefaultDriver(sequelizeConfig.default);

    return manager;

};

module.exports['@singleton'] = true;
module.exports['@require']   = ['config'];
