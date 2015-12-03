import Ember from 'ember';
import Moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['x-talk'],
  tagName: 'details',
  dateString: computed('talk.date', function() {
    return new Moment(this.get('talk.date'), 'MM-DD-YYYY').format('LL');
  })
});
