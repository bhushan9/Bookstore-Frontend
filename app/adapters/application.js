import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'http://159.203.166.19:3000'
});
