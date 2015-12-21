var utils       = require('vv-std-utils');
var mongoose = require('mongoose');

module.exports = function (config) {
    var manager = new utils.Manager();
    var mongoConfig = config.mongodb;

    utils.Lodash.forEach(mongoConfig.drivers, function (connectionString, driverAlias) {
        var connection = mongoose.connect(connectionString);
        manager.extend(driverAlias, connection);
    });

    manager.setDefaultDriver(mongoConfig.default);

    return manager;
};

module.exports['@singleton'] = true;
module.exports['@require']   = ['config'];