/**
 * Created by sohel on 3/30/15.
 */

define([
  'text!template/dashboard.html'
], function (DashboardTemplate) {
  'use strict';

  var DashboardView = Backbone.View.extend({

    el: '#page-content',

    template: _.template(DashboardTemplate),

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
    },

    render: function () {
      this.$el.html(this.template());
    }
  });
  return DashboardView;
});
