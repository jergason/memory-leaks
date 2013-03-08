var Model = Backbone.Model.extend({
  zombieResponses: [
    'braiinnnnnns',
    'gahhhhhhh',
    'FOOD',
    'nnnnnnnnnnnnnnnnghhhhhhh'
  ],
  initialize: function () {
    var randIndex = Math.floor(Math.random() * this.zombieResponses.length)
    this.set('text', this.zombieResponses[randIndex])
  }
})

var View = Backbone.View.extend({
  tagName: 'li',
  className: 'zombie',
  template: _.template('<%= text %>'),
  events: {
    'click': 'close'
  },
  initialize: function () {
    this.model.on('change', this.render, this)
    this.options.parent.on('close:all', this.close, this)
    this.render()
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()))
  },
  close: function () {
    // UNCOMMENT TO FIX LEAKS
    //this.options.parent.unbind('close:all', this.close, this)
    //this.model.unbind('change', this.render, this)
    this.$el.remove()
  }
})

var AppView = Backbone.View.extend({
  el: '#app',
  events: {
    'click #add': 'addView',
    'click #remove-all': 'closeAll'
  },
  addView: function () {
    var model = new Model()
    var view = new View({
      model: model,
      parent: this
    })
    $('#bin').append(view.$el)
  },
  closeAll: function () {
    this.trigger('close:all')
  }
})

$(function() {
  var appView = new AppView()
})
