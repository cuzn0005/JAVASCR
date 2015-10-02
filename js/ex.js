
var longrect;

var shortrect;

var babe = false;

document.addEventListener("DOMContentLoaded", function (Event) {
    console.log("lalalala");
  
    longrect = document.querySelector('.long-rect');
 
    shortrect = document.querySelector('.short-rect');
  
    longrect.addEventListener("mouseover", function () {
        shortrect.innerHTML = "Your mouse is here.";
    });
    
    longrect.addEventListener("mouseout", function () {
        shortrect.innerHTML = "Ok goodbye.";
        babe = true;
    });
    
    shortrect.addEventListener("click", function () {
        if (babe){
          alert("Boom.");
        }
    
    });   


    

});



