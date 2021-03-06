PostApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],

  events: {
    "click .delete": "destroyPost"
  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },

  destroyPost: function (event) {
    var $target = $(event.currentTarget);
    var post = this.collection.get($target.attr("data-id"));
    post.destroy();
  },

  render: function () {
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
});
