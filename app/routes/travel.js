import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.loadGoogleMap().then(() => {
      return Ember.$.get('https://gist.githubusercontent.com/mike-north/baad44e2c987e7d28994/raw').then(str => JSON.parse(str).trips);
    });
  }
});
