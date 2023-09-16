import Backbone from "backbone";

/**
*modalW is  a namespace for modal window
*
*/
var modalW = modalW || (self.modalW || {});
//
modalW.header                          = modalW.header             || {};
modalW.input.textarea                  = {};
modalW.input.choiceButton              = {};
modalW.input.closeButton               = {};
modalW.leftPanel.buttons.url           = "";
modalW.leftPanel.tabs.url              = "../src/partials/leftButton/templates/leftPanelButtonTmpl.html";
modalW.leftPanel.tabs.data             = null;
modalW.leftPanel.buttons.data          = null;
modalW.leftPanel.tabs.promise          = null;
modalW.leftPanel.buttons.promise       = null;
//
modalW.leftPanel.tabs.model            = null;
modalW.leftPanel.tabs.view             = null;
//
modalW.leftPanel.tabs.modelClass       = Backbone.Model.extend ({ defaults: {
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