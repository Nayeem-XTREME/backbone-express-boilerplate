/**
 * Created by sohel on 3/30/15.
 */


define([
  'collections/user',
  'views/home',
  'views/dashboard',
  'views/contact',
  'views/formView'
], function (UserCollection, HomeView, DashboardView, ContactView, formView) {
  'use strict';

  var AdminRouter = Backbone.Router.extend({

    currentView: null,

    routes: {
      "home":          "home",         // #home
      "dashboard":     "dashboard",    // #dashboard
      "contact":       "contact",       // #contact
      "form":          "form"
    },

    /**
     * renders the current view and closes the existing one
     * @param view, the view instance
     * @param isRender, true/false
     */
    changeView: function (view, isRender) {
      if (this.currentView != null) {
        this.currentView.close();
      }
      this.currentView = view;

      if (isRender) {
        this.currentView.render();
      }
    },

    home: function(){
      this.changeView(new HomeView(), true);
    },

    dashboard: function() {
      var userCollection = new UserCollection();
      this.changeView(new DashboardView({collection: userCollection}), true);
      userCollection.fetch({reset: true});
    },

    contact: function() {
      this.changeView(new ContactView(), true);
    },

    form: function() {
      this.changeView(new formView(), true);
    }
  });

  return new AdminRouter();
});
