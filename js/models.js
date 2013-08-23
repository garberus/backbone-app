
define([
], function() {

  var Player = Backbone.Model.extend({
    defaults: {
      title: undefined,
      color: undefined
    }
  });

  var Card = Backbone.Model.extend({
    defaults: {
      title: undefined,
      text: undefined
    }
  });

  var Empire = Backbone.Model.extend({
    defaults: {
      title: undefined,
      name: undefined,
      adjective: undefined,
      units:  0,
      leader: undefined,
      home: -1,
      naval:  [-1]
    }
  });

  var Territory = Backbone.Model.extend({
    defaults: {
      title: undefined,
      index: -1
    }
  });

  var Players = Backbone.Collection.extend({
    model: Player,
    url: '/js/static/players.json'
  });

  var Cards = Backbone.Collection.extend({
    model: Card,
    url: '/js/static/cards.json'
  });

  var Empires = Backbone.Collection.extend({
    model: Empire,
    url: '/js/static/empires.json'
  });

  var Territories = Backbone.Collection.extend({
    model: Territory,
    url: '/js/static/territories.json'
  });

  var Page = Backbone.Model.extend({
    defaults: {
      route: undefined
    }
  });

  var Pages = Backbone.Collection.extend({
    model: Page
  });

  console.log('(models)', 'models loaded');

  return {
    Player: Player,
    Players: new Players,
    Card: Card,
    Cards: new Cards,
    Empire: Empire,
    Empires: new Empires,
    Territory: Territory,
    Territories: new Territories,
    Page: Page,
    Pages: Pages
  }

});
