'use strict';

/**
 * events-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-list.events-list');
