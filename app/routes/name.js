import Route from '@ember/routing/route';

export default Route.extend({
		model: function(params,transition) {
			console.debug("Hello from Name");
			var name = transition.params["name"].name;
			console.debug(name);
			return Ember.$.getJSON("http://127.0.0.1:3000/api/genres/"+name,function(){
				 console.debug("WOOHOO");
			});
		
	}
});
