'use strict';

/**
 * calmet-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calmet-service.calmet-service');
