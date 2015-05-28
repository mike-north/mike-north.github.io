import Ember from 'ember';

export default Ember.View.extend({
  navui: Ember.inject.service('nav-ui'),
  classNames: ['speaking'],
  didInsertElement() {
    this._super(...arguments);
    this.get('navui').addTabs([
      {name: 'past', route: 'speaking.past'},
      {name: 'upcoming', route: 'speaking.upcoming'}
    ]);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('navui').clearTabs();
  }
});
