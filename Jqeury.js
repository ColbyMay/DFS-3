var string = "hello";
var boolean = true;

var text = $(".word");
var circle = $(".circle");

console.log(circle);

$(document).on('mousemove', function(event)
{
     var pageX = event.pageX;
     var pageY = event.pageY;
  //console.log(pageX + ":" + pageY)
  circle.css
  ({
    "opacity": (pageX/window.innerWidth),
    "left": pageX + "px",
    "top": pageY + "px"
   });
    text.css
  ({
    //console.log(pageX + ":" + pageY)
    "right": pageX + "px",
    "top": pageY + "px"
  });
 })


