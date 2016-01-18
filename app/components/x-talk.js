import Ember from 'ember';
import Moment from 'moment';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['x-talk'],
  classNameBindings: ['isUpcoming:x-talk-upcoming'],

  mDate: computed('talk.date', function() {
    return new Moment(this.get('talk.date'), 'MM-DD-YYYY');
  }),

  today: computed(function() {
    return new Moment();
  }),

  isUpcoming: computed('mDate', 'today', function() {
    return this.get('today').isBefore(this.get('mDate'));
  })
});
