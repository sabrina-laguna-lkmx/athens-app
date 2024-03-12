'use strict';

/**
 * contractor-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contractor-service.contractor-service');
