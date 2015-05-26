import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['top-nav'],

  didInsertElement() {
    this._super(...arguments);
    this.$('.button-collapse').sideNav();
  }
});
