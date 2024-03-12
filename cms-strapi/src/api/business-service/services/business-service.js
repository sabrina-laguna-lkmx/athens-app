'use strict';

/**
 * business-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-service.business-service');
