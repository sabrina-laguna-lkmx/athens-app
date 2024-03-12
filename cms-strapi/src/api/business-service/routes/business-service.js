'use strict';

/**
 * business-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::business-service.business-service');
