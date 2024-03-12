'use strict';

/**
 * home-tip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-tip.home-tip');
