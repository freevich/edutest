/**
 * @author ooganesyan
 */
import Backbone from 'backbone';
import _, { map } from 'underscore';
import jQuery from "jquery";
const $ = jQuery;
//
$(document).ready(function(){
	//
    //-----------------------------
    //CHECKING OUT FOR WEBSOCKET SUPPORT
    var webSocketSupported = ('WebSocket' in self);
    if(!webSocketSupported) {
        alert('WebSockets are NOT supported by your browser!')
    }else{
        //alert('WebSockets ARE supported by your browser!')
    };
    //
    //var newSocket = new WebSocket('ws://echo.websocket.org/');//ws://localhost:8020/emptyBackboneBoilerplate
    //newSocket.onopen = function(evt){alert('newSocket opened! And event type is : '+ evt.type)};
    /**/
    //newSocket.open();
    //
	//console.log(JSON.stringify(newSocket));
});
