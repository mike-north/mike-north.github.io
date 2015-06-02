import DS from 'ember-data';

const { attr, hasMany } = DS;

let BlogpostModel = DS.Model.extend({
  title: attr('string'),
  author: attr('string'),
  templateName: attr('string'),

  createdAt: attr('date'),
  tags: hasMany('blogpost-tag')

});

BlogpostModel.reopenClass({
  FIXTURES: []
});


export default BlogpostModel;
