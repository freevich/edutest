/**
 *@author ooganesyan
 *
 */
import _, { map } from 'underscore';
import Backbone from  'backbone';
import jQuery from "jquery";
const $ = jQuery;
//
//model object
var leftButton = leftButton || {};
leftButton.title = '';
leftButton.styleClassName = '';


//
//model backbone class
leftButton.model = Backbone.model.extend({
                    defaults:{

                    },
                    validate: function(attribs){
                        if(attribs.title === undefined){
                            return 'Set a title'
                        }
                    },
                    initialize: function() {
                        this.on('invalid', function(model, error){
                            console.log(error);
                        })
                    }
                    });