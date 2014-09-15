import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'cards/index',
  didInsertElement: function() {
    // var controller = this.get('controller');
    // this.$().sortable({
    //   items: '.card',
    //   update: function(event, ui) {
    //     console.log("update");
    //     var indexes = {};
    //     $(this).find('.card').each(function(index) {
    //       indexes[$(this).data('id')] = index;
    //     });
    //     $(this).sortable('cancel');
    //     controller.updateSortOrder(indexes);
    //   }
    // });
  }
});

