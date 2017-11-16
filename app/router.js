import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('genre');
  this.route('name',{ path: 'genre/:name'});
  this.route('book');
  this.route('createGenre');
});

export default Router;
