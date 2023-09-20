/**
 *@author ooganesyan
 *
 */
//import _, { map } from 'underscore';
import * as _ from "underscore";
import Backbone from  'backbone';
import jQuery from "jquery";
const $ = jQuery;
//
//view object
import LeftButtonModel from "../models/leftButtonModel.js";
let lbm = new LeftButtonModel();

console.log('from view #1: ', lbm.get('title'));
//
//
//model backbone class
let LeftButtonView = Backbone.View.extend({
    //
    model: LeftButtonModel,
    //localStorage: new Backbone.LocalStorage("todos-backbone"),
    // el - stands for element. Every view has a element associate in with HTML
    //      content will be rendered.
    el: '#aside',
    // It's the first function called when this view it's instantiated.
    initialize: function(){
        this.render();
    },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions
    //       to push content. Like the Hello World in this case.
    render: function(){
        this.$el.html("Hello World");
    }
});

let lbv = new LeftButtonView();

//console.log('from view #2: ', leftButtonModel.get('title'));

export default {lbv};