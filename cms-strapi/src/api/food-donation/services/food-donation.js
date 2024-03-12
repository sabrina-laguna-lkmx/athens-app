'use strict';

/**
 * food-donation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-donation.food-donation');
