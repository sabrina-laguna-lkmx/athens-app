'use strict';

/**
 * street-sweeping service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::street-sweeping.street-sweeping');
