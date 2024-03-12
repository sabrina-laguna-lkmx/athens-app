'use strict';

/**
 * earth-commitment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::earth-commitment.earth-commitment');
