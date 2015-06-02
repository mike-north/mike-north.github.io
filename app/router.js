import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('speaking', function() {
    this.route('past');
    this.route('upcoming');
  });
  this.route('code');

  this.route('blog', function() {
    this.route('show', {path: ':id'});
  });
});

export default Router;
