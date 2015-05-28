import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model, transition) {
    var handlerInfos = transition.state.handlerInfos;
    var leafRouteName = handlerInfos[handlerInfos.length - 1].name;
    var urlParts = leafRouteName.split('.');

    this.container.lookup('controller:speaking').set('_selectedTabId', urlParts[urlParts.length - 1]);
  }
});
