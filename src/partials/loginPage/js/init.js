/**
 * @author ooganesy
 */
$(document).ready(function(){
	//
    //-----------------------------
    //CHECKING OUT FOR WEBSOCKET SUPPORT
    var webSocketSupported = ('WebSocket' in self);
    if(!webSocketSupported) {alert('WebSockets are NOT supported by your browser!')};
    //
    /*
    var newSocket = new WebSocket('ws://echo.websocket.org/');//ws://localhost:8020/emptyBackboneBoilerplate

    newSocket.onopen = function(evt){alert('newSocket opened! And event type is : '+ evt.type)};
    */
    //newSocket.open();
    //
	
});
