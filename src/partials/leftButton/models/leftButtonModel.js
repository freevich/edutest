/**
 *@author ooganesyan
 *
 */
import _, { map } from 'underscore';
import Backbone from  'backbone';
import jQuery from "jquery";
const $ = jQuery;
//
import { jsPDF } from "jspdf";
//
// backbone model class
let  LeftButtonModel = Backbone.Model.extend({
                defaults: function() {
                    return {
                        title: undefined,//not init...
                        //order: Todos.nextOrder(),
                        pushed: undefined,


                    };
                },
                toggle: function() {
                    this.save({pushed: !this.get("pushed")});
                },
                validate: function(attribs){
                        if(attribs.title === undefined){
                            //
                            return 'Set a title'
                        };
                    if(attribs.pushed === undefined){
                        //
                        return '"pushed" is undefined. I did Set a "pushed" as false'
                    };
                },
                initialize: function() {
                        this.on('invalid', function(model, error){

                            console.log('validation event is "invalid" : ', error);
                        }, this);
                },
});
//

let lb = new LeftButtonModel();
lb.set('pushed', true, {validate: true});

//console.log('from model #1: ', lb.get('pushed'));

export default LeftButtonModel;
//



