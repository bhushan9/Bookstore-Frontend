import Route from '@ember/routing/route';

export default Route.extend({
		model: function() {
		


		return Ember.$.getJSON("http://159.203.166.19:3000/api/genres",function(){
			console.debug("WOOHOO");
		});

		
	},

	actions: {
		submit(){
			console.debug("Inside the actions");
			var genre = this.modelFor('genre');
			console.debug(genre.name);
			var model = this;
			this.set(name,'');
			Ember.$.ajax({
			  url: 'http://159.203.166.19:3000/api/genres',
			  type: "POST",
			  contentType: 'application/json',
			  data: JSON.stringify({ name: genre.name })
			}).then(function(resp){
				console.debug("POST Sucess");
				model.refresh();

			  // handle your server response here
			});

		}
	}


});

