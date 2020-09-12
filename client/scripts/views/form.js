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
  
      events: {
        "submit": "save"
      },
  
      initialize: function () {
        _.bindAll(this, 'save');
      },
  
      render: function () {
        this.$el.html(this.template());
      },

      save: function (e) {
        e.preventDefault();

        let data = {
          name: $('#name').val(),
          email: $('#email').val(),
          address: $('#address').val(),
          mobile: $('#mobile').val(),
          book: $('#book').val(),
          author: $('#author').val(),
          borrowDate: $('#borrow').val(),
          returnDate: $('#return').val()
        }

        alert(JSON.stringify(data));


        $('#myForm')[0].reset();

      }

    });
    return Form;
  });
  