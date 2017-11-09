import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		

		return Ember.$.getJSON("http://159.203.166.19:3000/api/books",function(){
			console.debug("WOOHOO");
		});
		
	},

		actions: {
		submit(){
			console.debug("Inside the actions");
			var book = this.modelFor('book');
			console.debug(book.name);

			Ember.$.ajax({
			  url: 'http://159.203.166.19:3000/api/books',
			  type: "POST",
			  // dataType: 'json',
			  contentType: 'application/json',
			  data: JSON.stringify({ 
			  	title: book.title,
			  	genre: book.genre,
			  	description: book.description,
			  	author: book.author,
			  	publisher: book.publisher,
			  	pages: book.pages,
			  	image_url: book.image_url,
			  	buy_url: book.buy_url,
			  	create_date: book.create_date


			  })
			}).then(function(resp){
				console.debug("POST Sucess");
			  // handle your server response here
			});

		}
	}
});
