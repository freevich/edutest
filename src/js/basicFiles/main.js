/* ===================================================================
 * Main JS
 * ------------------------------------------------------------------- */
 import Backbone from "backbone";
 import jQuery from "jquery";
 const $ = jQuery;
 import _, { map } from 'underscore';

//
/*
* this is a empty project template
*
*/
//ns is  a common namespace
var ns = ns || (self.ns || {});
//
//
//-------------------------------------------
//-------------------------------------------
ns.leftPanel                       = ns.leftPanel              || {};
//
ns.leftPanel.buttons               = {};
ns.leftPanel.tabs                  = {};
//
ns.leftPanel.buttons.url           = "";
ns.leftPanel.tabs.url              = "../src/partials/layers/leftPanel/templates/leftPanelButtonTmpl.html";
ns.leftPanel.tabs.data             = null;
ns.leftPanel.buttons.data          = null;
ns.leftPanel.tabs.promise          = null;
ns.leftPanel.buttons.promise       = null;
//
ns.leftPanel.tabs.model            = null;
ns.leftPanel.tabs.view             = null;
//
ns.leftPanel.tabs.modelClass       = Backbone.Model.extend ({ defaults: {
        // tab1Text:       'blue',
        // tab2Text:       'rose',
        // tab3Text:       'grey',
        // tab4Text:       'white'
    },
    //
    initialize:     function(){
        //

    }
});
ns.leftPanel.tabs.viewClass   = Backbone.View.extend({
    //
    tagName:  'div',
    el: 'div#leftPanel', //#mainContainer
    // Cache the template function for a single item.
    leftPanelTpl: _.template('m'
        // '<ul>'+
        // '<li><a href="#tabs-1">  <%=tab1Text%>  </a></li>'+
        // '<li><a href="#tabs-2">   <%=tab2Text%>  </a></li>'+
        // '<li><a href="#tabs-3">  <%=tab3Text%> </a></li>'+
        // '<li><a href="#tabs-4">   <%=tab4Text%>  </a></li>'+
        // '</ul>'
    ),//
    //
    events: {
        //
    },
    //
    initialize: function (options) {
        //
        this.options = options || {};
        _.bindAll(this, 'render');
        this.render();//??
    },
    // Re-render the ...
    render: function(param) {
        //
        if(!!param ){
            this.leftPanelTpl =  _.template(param);//_.template(param)
            //this.leftPanelTpl = function(){ return _.template(param); };
            //};//
            //
            this.$el.html( this.leftPanelTpl( this.model.attributes ));//this.model.toJSON() or .attributes
            //this.$el.tabs();
            //console.log(par);
            this.$el.css({'overflow':'auto'});
        };
        //console.log('"param"  value is a : '+ param)    ;
        return this;//!!
    }
});