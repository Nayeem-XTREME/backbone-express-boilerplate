/**
 * Created by sohel on 3/30/15.
 */

define([
    'text!template/form.html', 'underscore'
  ], function (FormTemplate, _) {
    'use strict';
  
    var Form = Backbone.View.extend({
  
      el: '#page-content',
  
      template: _.template(FormTemplate),
  
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
    return FormView;
  });
  