import Ember from 'ember';
import _collection from 'lodash/collection';
import Moment from 'moment';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('https://gist.githubusercontent.com/mike-north/baad44e2c987e7d28994/raw').then(str => JSON.parse(str).talks).then(list => {
      return _collection.sortBy(list, function (talk) {
        let m = new Moment(talk.date, 'MM-DD-YYYY');
        return -1 * m.valueOf();
      });
    });
  }
});
