'use strict';

/**
 * holiday-tree service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::holiday-tree.holiday-tree');
