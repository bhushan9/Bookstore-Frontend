import Route from '@ember/routing/route';

export default Route.extend({
		model: function(params,transition) {
			console.debug("Hello from Name");
			var name = transition.params["name"].name;
			console.debug(name);
			return Ember.$.getJSON("http://159.203.166.19:3000/api/genres/"+name,function(){
				 console.debug("WOOHOO");
			});
		
	}
});
