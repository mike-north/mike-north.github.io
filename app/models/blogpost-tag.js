import DS from 'ember-data';

const { attr } = DS;

let BlogpostTagModel = DS.Model.extend({
  label: attr('string')
});


BlogpostTagModel.reopenClass({
  FIXTURES: []
});


export default BlogpostTagModel;
