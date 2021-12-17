$(document).ready(function(){
    $('button').on('click', function(){
        $('#caja').animate({width:'+=600px', height:'+=600px',marginLeft:'+=400px'}, 
        2000);
    });
    $('button').on('click', function(){
        $('#caja').animate({width:'-=600px', height:'-=600px',marginLeft:'-=400px'}, 
        2000);
    });
});