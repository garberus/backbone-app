
define([
  'settings',
  'models',
  'views'
], function(settings, models, views) {

  var _pages = new models.Pages;
  var _pageTracker = {};
  var _html = null;
  var _cache = {};
  var _routes = settings.routes;
  var _content = document.getElementById('content');

  var HomeController = Backbone.View.extend({

    render: function homeControllerRender() {

      if (_html) {
        _html.remove();
      }

      var routes = _.values(_routes);
      var i = 0, l = routes.length;

      for (; i < l; i++) {

        if (!_pageTracker[routes[i]] && routes[i] !== 'home') {
          _pages.add({ route: routes[i] });
          _pageTracker[routes[i]] = 1;
        }
      }

      if (!_cache['home']) {
        console.log('(controllers) home: generating menu');
        _html = new views.NavMenuView({ collection: _pages });
        _cache['home'] = _html;
        _html.render();
      } else {
        _html = _cache['home'];
        console.log('(controllers) home: getting from cache', _html);
      }

      _content.appendChild(_html.el);

    }

  });

  var CardsController = Backbone.View.extend({

    render: function cardsControllerRender() {

      var _this = this;

      if (_html) {
        _html.remove();
      }

      models.Cards.fetch({
        success: function(cards) {
          console.log('(controllers) Cards fetched:', cards);
          _this.initView(cards);
        },
        fail: function(err) {
          console.log('(controllers) Failed to get card data:', err);
        }
      });

    },

    initView: function cardsInitView(data) {

      if (!_cache['cards']) {
        _html = new views.CardListView({ collection: data });
        _cache['cards'] = _html;
        _html.render();
      } else {
        _html = _cache['cards'];
        console.log('(controllers) cards: getting from cache', _html);
      }

      _content.appendChild(_html.el);

    }

  });

  var EmpiresController = Backbone.View.extend({

    render: function empireControllerRender() {

      var _this = this;

      if (_html) {
        _html.remove();
      }

      models.Empires.fetch({
        success: function(data) {
          console.log('(controllers) Empires fetched:', data);
          _this.initView(data);
        },
        fail: function(err) {
          console.log('(controllers) Failed to get empire data:', err);
        }
      });

    },

    initView: function empireInitView(data) {

      if (!_cache['empires']) {
        _html = new views.EmpireListView({ collection: data });
        _cache['empires'] = _html;
        _html.render();
      } else {
        _html = _cache['empires'];
        console.log('(controllers) empires: getting from cache', _html);
      }

      _content.appendChild(_html.el);

    }

  });

  var TerritoriesController = Backbone.View.extend({

    render: function territoriesControllerRender() {

      var _this = this;

      if (_html) {
        _html.remove();
      }

      models.Territories.fetch({
        success: function(data) {
          console.log('(controllers) Territories fetched:', data);
          _this.initView(data);
        },
        fail: function(err) {
          console.log('(controllers) Failed to get territories data:', err);
        }
      });

    },

    initView: function territoriesInitView(data) {

      if (!_cache['territories']) {
        _html = new views.TerritoryListView({ collection: data });
        _cache['territories'] = _html;
        _html.render();
      } else {
        _html = _cache['territories'];
        console.log('(controllers) territories: getting from cache', _html);
      }

      _content.appendChild(_html.el);

    }

  });


  return {

    HomeController: new HomeController,
    CardsController: new CardsController,
    EmpiresController: new EmpiresController,
    TerritoriesController: new TerritoriesController

  }

});
