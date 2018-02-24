 /*var images = [
 
     {cap:"this website for Digital Norway.", img:"../img/1.png"}
     {cap:"the 2016 study catalogue for Westerdals Oslo ACT." img:"../img/2.png"},
     {cap:"an app for finding parking spaces and paying for them.", img:"../img/3.png"},
     {cap:"the new website for the National Library of Norway.", img:"../img/4.png"},
     {cap:"generative posters and other creative coding stuff.", img:"../img/5.jpg"},
     
 ];*/

var caps = [
    
    "this website for Digital Norway.",
    "the 2016 study catalogue for Westerdals Oslo ACT.",
    "an app for finding parking spaces and paying for them.",
    "the new website for the National Library of Norway.",
    "generative posters and other creative coding stuff."
           
            ]

var images = [
    
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.jpg"
           
            ]


var c = 0;

console.log(caps[0]);

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
    
   
    
    $("#plane").css("background-image", 'url(' + images[c] + ')');
    
    if (posX > 90 && posX < 95) {
        
        c++;
  
    }
      console.log(posX);
    
});

//Y = (X-A)/(B-A) * (D-C) + C
// X = input, Y = Output, A-B = Input range, D-C = Output range
