'use strict';

/**
 * Activitytype.js controller
 *
 * @description: A set of functions called "actions" for managing `Activitytype`.
 */

module.exports = {

  /**
   * Retrieve activitytype records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.activitytype.search(ctx.query);
    } else {
      return strapi.services.activitytype.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a activitytype record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.activitytype.fetch(ctx.params);
  },

  /**
   * Count activitytype records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.activitytype.count(ctx.query);
  },

  /**
   * Create a/an activitytype record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.activitytype.add(ctx.request.body);
  },

  /**
   * Update a/an activitytype record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.activitytype.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an activitytype record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.activitytype.remove(ctx.params);
  }
};
