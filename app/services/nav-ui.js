import Ember from 'ember';

export default Ember.Service.extend({
  tabs: [],
  selectedTabId: Ember.computed({
    get() {
      var router = this.container.lookup('router:main');
      var routeName = router.get('router.state.handlerInfos.lastObject.name');
      return routeName;
    },
    set(key, newVal) {
      var router = this.container.lookup('router:main');
      router.transitionTo(newVal);
      return newVal;
    }
  }),
  clearTabs() {
    this.setProperties({
      tabs: [],
      selectedTabId: null
    });
  },

  addTabs(toAdd) {
    this.get('tabs').addObjects(toAdd);
  }
});
