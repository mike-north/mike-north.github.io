import { moduleForModel, test } from 'ember-qunit';

moduleForModel('blogpost', 'Unit | Model | blogpost', {
  // Specify the other units that are required for this test.
  needs: ['model:blogpost-tag']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
