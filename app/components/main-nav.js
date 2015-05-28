import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['top-nav'],
  classNameBindings: ['noTabs:no-tabs'],
  navui: Ember.inject.service('nav-ui'),
  noTabs: Ember.computed.empty('navui.tabs'),
  didInsertElement() {
    this._super(...arguments);
    this.$('.button-collapse').sideNav();
  }
});
