
requirejs.config({
  baseUrl: 'js'
});

requirejs([
  'router',
  'controllers',
  'views'
], function(Router, controllers, views) {

  var _navigation = new Router();

  _navigation.on('route', function(r, route, params) {

    console.log('(main) route changed', r, route, params);

    if (r == 'home') {
      controllers.HomeController.render();
    } else if (r == 'cards') {
      controllers.CardsController.render();
    } else if (r == 'empires') {
      controllers.EmpiresController.render();
    } else if (r == 'territories') {
      controllers.TerritoriesController.render();
    }


  });

  Backbone.history.start({ pushState: false });

});
