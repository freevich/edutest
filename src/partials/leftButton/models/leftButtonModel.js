/**
 *@author ooganesyan
 *
 */
import _, { map } from 'underscore';
import Backbone from  'backbone';
import jQuery from "jquery";
const $ = jQuery;
//
// backbone model class
let  LeftButtonModel = Backbone.Model.extend({
                defaults: function() {
                    return {
                        title: undefined,//not init...
                        //order: Todos.nextOrder(),
                        pushed: false,


                    };
                },
                toggle: function() {
                    this.save({pushed: !this.get("pushed")});
                },
                validate: function(attribs){
                        if(attribs.title === undefined){
                            //Backbone.Events.trigger('invalid');

                            //console.log('from validation #1: ', this.get('title'));

                            return 'Set a title'
                        }
                },
                initialize: function() {
                        this.on('invalid', function(model, error){
                            console.log('validation event is "invalid" : ', error);
                        });
                },
});
//

let lb = new LeftButtonModel();
lb.set('pushed', true, {validate: true});

console.log('from model #1: ', lb.get('pushed'));

export default LeftButtonModel;
//



