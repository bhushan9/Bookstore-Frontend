import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	genre: DS.attr('string'),
	description: DS.attr('string'),
	author: DS.attr('string'),
	publisher: DS.attr('string'),
	pages: DS.attr('string'),
	image_url: DS.attr('string'),
	buy_url: DS.attr('string'),
	create_date: DS.attr('string')
});
