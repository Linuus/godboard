import auth from '../models/auth';

export default {
  name: 'auth',

  initialize: function(container, app) {
    app.register('auth:main', auth, {singleton: true});
    app.inject('controller', 'auth', 'auth:main');
    app.inject('route', 'auth', 'auth:main');
  }
};
