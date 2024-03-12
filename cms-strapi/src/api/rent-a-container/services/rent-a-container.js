'use strict';

/**
 * rent-a-container service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rent-a-container.rent-a-container');
