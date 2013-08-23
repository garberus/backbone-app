
define([
  'settings'
], function(settings) {

  var Router = Backbone.Router.extend({

    routes: settings.routes

  });

  console.log('(router)', 'router loaded');

  return Router;

});
