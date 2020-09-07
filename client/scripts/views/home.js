/**
 * Created by sohel on 3/30/15.
 */

define([
  'text!template/home.html', 'underscore'
], function (HomeTemplate, _) {
  'use strict';

  var HomeView = Backbone.View.extend({

    el: '#page-content',

    template: _.template(HomeTemplate),

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
  return HomeView;
});
