
define([

], function() {

  var NavItemView = Backbone.View.extend({

    template: _.template($('#navigation-link').html()),

    tagName: 'li',

    className: 'navigation-link',

    render: function() {
      if (this.model) {
        this.$el.html(this.template(this.model.attributes));
      }

      return this;
    }

  });

  var NavMenuView = Backbone.View.extend({

    tagName: 'ul',

    className: 'navigation-menu',

    initialize: function() {

      this.navitems = [];

      if (this.collection) {
        _.each(this.collection.models, function(model) {
          this.navitems.push(new NavItemView({ model: model }));
        }, this);
      }

    },

    render: function() {

      if (this.navitems) {
        _.each(this.navitems, function(view) {
          this.$el.append(view.render().el);
        }, this);
      }

      return this;
    }

  });

  var CardView = Backbone.View.extend({

    template: _.template($('#cardlist-card').html()),

    tagName: 'li',

    cssClass: 'card',


    render: function() {
      if (this.model) {
        this.$el.html(this.template(this.model.attributes));
      }
      return this;
    }

  });

  var CardListView = Backbone.View.extend({

    tagName: 'ul',

    cssClass: 'card-list',

    initialize: function() {

      console.log('(views)', 'initialising CardView', this.collection);

      this.cards = [];

      if (this.collection) {
        _.each(this.collection.models, function(model) {
          this.cards.push(new CardView({ model: model }));
        }, this);
      }
    },

    render: function() {

      if (this.cards) {
        _.each(this.cards, function(view) {
          this.$el.append(view.render().el);
        }, this);
      }

      return this;
    }

  });

  var EmpireView = Backbone.View.extend({

    template: _.template($('#empirelist-empire').html()),

    tagName: 'li',

    cssClass: 'empire',


    render: function() {
      if (this.model) {
        this.$el.html(this.template(this.model.attributes));
      }
      return this;
    }

  });

  var EmpireListView = Backbone.View.extend({

    tagName: 'ul',

    cssClass: 'empire-list',

    initialize: function() {

      console.log('(views)', 'initialising EmpireView', this.collection);

      this.empires = [];

      if (this.collection) {
        _.each(this.collection.models, function(model) {
          this.empires.push(new EmpireView({ model: model }));
        }, this);
      }
    },

    render: function() {

      if (this.empires) {
        _.each(this.empires, function(view) {
          this.$el.append(view.render().el);
        }, this);
      }

      return this;
    }

  });

  var TerritoryView = Backbone.View.extend({

    template: _.template($('#territorylist-territory').html()),

    tagName: 'li',

    cssClass: 'territory',


    render: function() {
      if (this.model) {
        this.$el.html(this.template(this.model.attributes));
      }
      return this;
    }

  });

  var TerritoryListView = Backbone.View.extend({

    tagName: 'ul',

    cssClass: 'territory-list',

    initialize: function() {

      console.log('(views)', 'initialising TerritoryView', this.collection);

      this.territories = [];

      if (this.collection) {
        _.each(this.collection.models, function(model) {
          this.territories.push(new TerritoryView({ model: model }));
        }, this);
      }
    },

    render: function() {

      if (this.territories) {
        _.each(this.territories, function(view) {
          this.$el.append(view.render().el);
        }, this);
      }

      return this;
    }

  });

  console.log('(views)', 'views loaded');

  return {

    NavMenuView: NavMenuView,
    CardListView: CardListView,
    EmpireListView: EmpireListView,
    TerritoryListView: TerritoryListView
  }

});
