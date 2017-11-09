import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	create_date: DS.attr('string'),
});
