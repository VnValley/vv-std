var utils       = require('vv-std-utils');
var mongoose = require('mongoose');

module.exports = function (config) {
    var manager = new utils.Manager();
    var mongoConfig = config.mongodb;

    var connection = mongoose.connect('mongodb://' + mongoConfig.mongoConnect.host + '/' + mongoConfig.mongoConnect.database);

    manager.extend('mongodb', connection);

    manager.setDefaultDriver(mongoConfig.default);

    return manager;
};

module.exports['@singleton'] = true;
module.exports['@require']   = ['config'];