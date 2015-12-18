var Manager = function () {};

/**
 * List of the manager's supported driver
 * @type {{}}
 */
Manager.prototype.drivers = {};

/**
 * The default driver name
 * @type {null}
 */
Manager.prototype.default = null;

/**
 * Extends the Manager with given driver
 *
 * @param alias
 * @param driver
 * @returns {Manager}
 */
Manager.prototype.extends = function (alias, driver) {
    this.drivers[alias] = driver;
    return this;
};

/**
 * Set the default driver with given alias
 *
 * @param defaultDriverAlias
 * @returns {Manager}
 */
Manager.prototype.setDefaultDriver = function (defaultDriverAlias) {
    this.default = defaultDriverAlias;
    return this;
};

/**
 * Get a driver
 *
 * @param alias
 * @returns {*}
 */
Manager.prototype.driver = function (alias) {
    alias = alias || this.default;

    if (this.has(alias)) return this.drivers[alias];

    throw new Error('Driver [' + alias + '] is not supported');

};

/**
 * Check if the manager has a driver with given alias or not.
 *
 * @param alias
 * @returns {boolean}
 */
Manager.prototype.has = function (alias) {
    return !!this.drivers[alias];
};

/**
 *
 * @type {Manager}
 */
module.exports = Manager;