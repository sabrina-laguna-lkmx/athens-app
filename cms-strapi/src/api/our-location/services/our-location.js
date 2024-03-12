'use strict';

/**
 * our-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-location.our-location');
