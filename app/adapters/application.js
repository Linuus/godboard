import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase(window.GodboardENV.APP.firebase_instance_url)
});
