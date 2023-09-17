//
import jQuery from "jquery";
const $ = jQuery;
import createUUID from  '/src/utils/generateGUID.js';
//
$(document).ready(function(){
    //
    $('body#top').on("click", function() {
        //alert( "This will be displayed only once." );
        $("div.mainContainer").css('display', 'block');
        //$("#top").off();
    });
    //this fragment is for blinking square in top left header panel
    //
    var colors = [
        ['#AF1318','#00FF00','#FF0000'],
        ['#0000FF','#FFFF00','#00FF0F'],
        ['#00FFFF','#F0F000','#FF0F00']
    ];
    //
    for (var i=0; i< 3; i++){
        //
        for(var j=0; j<3; j++){
            //
            $('#colorBarContainer').append( $('<div id="block_'+i+'_'+j+'" class="colorBar"></div>')
                .css({'background-color':colors[i][j],
                    'left'    :(i*33)+'%',
                    'top'     :(j*33)+'%',
                    'width'   :'33%',
                    'height'  :'33%'
                })//EOF css
            );//EOF append
        }};//EOF both 'for's
    //
    var blocks = $("div[id^='block_']");
    //
    setInterval(function(){
        blocks.map(function(){
            $(this).css({ 'background-color': Please.make_color() });
        });
    },1500);

    console.log('Here is created GUID: '+createUUID());

});//EOF ready