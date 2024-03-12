'use strict';

/**
 * zero-waste service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::zero-waste.zero-waste');
