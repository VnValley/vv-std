var utils       = require('vv-std-utils');
var Sequelize   = require('sequelize');

module.exports = function (config) {
    var manager         = new utils.Manager();
    var sequelizeConfig = config.sequelize;

    utils.Lodash.forEach(sequelizeConfig.drivers, function (driverConfig, driverAlias) {

        // TODO
        var connection = new Sequelize();
        // extra config etc..

        manager.extend(driverAlias, connection);
    });

    manager.setDefaultDriver(sequelizeConfig.default);




    // TODO make new sequelize instance here!

    return manager;

};

module.exports['@singleton'] = true;
module.exports['@require']   = ['config'];
