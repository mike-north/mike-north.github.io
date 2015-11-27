import Ember from 'ember';
import _collection from 'lodash/collection';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('https://gist.githubusercontent.com/mike-north/baad44e2c987e7d28994/raw').then(str => JSON.parse(str).talks).then(list => {
      return _collection.sortBy(list, function (talk) {
        return -1 * new Date(talk.date).valueOf();
      });
    });
  }
});
