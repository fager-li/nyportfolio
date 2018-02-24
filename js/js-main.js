




var mouseX, mouseY;

$("#detector").mousemove(function(event) {
    
    mouseX = event.pageX;
    mouseY = event.pageY;
    var X = (mouseX-1)/(-1 - $("#detector").width()) *(180-0) + 0;
    var Y = (mouseX-1)/(-1 - $("#detector").width()) *(180-0) + 0;
    var posX = X*-1;
    var posY = Y*-1;
    
$("#plane").css({transform:"rotateX("+posX+"deg) rotateY("+posY+"deg)"});
    
   
    $("#myelement").css({left:0, backgroundColor:'blue'})
    
   // $("#plane").css({transform: 'translateY(300px) rotateZ(120deg)'})

    
});

//Y = (X-A)/(B-A) * (D-C) + C
// X = input, Y = Output, A-B = Input range, D-C = Output range
