import Ember from 'ember';

export default Ember.Controller.extend({
  _selectedTabId: 'past',
  selectedTabId: Ember.computed('_selectedTabId', {
    get() {
      return this.get('_selectedTabId');
    },
    set(key, val) {
      if (val === 'upcoming') {
        this.transitionToRoute('speaking.upcoming');
      }
      else {
        this.transitionToRoute('speaking.past');
      }
      return val;
    }
  })
});
