import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    return this.replaceWith('speaking.upcoming');
  }
});
