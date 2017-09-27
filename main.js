/*var logo = document.getElementById("header__block__text");

window.addEventListener('load', setInterval(recolor, 2000));

function recolor() {
  var flag = 0; 
  if(flag === 0){
    setTimeout(function(){logo.style.color = "white"}, 1000)
    flag = 1;
  }
  if (flag === 1){
   setTimeout(function(){logo.style.color = "black"}, 500)
    flag = 0;
     };
}*/

(function(){
  var logo = document.getElementById("header__block__text");
  logo.style.color = "white";

  setInterval(function(){
    if(logo.style.color === "white"){
      logo.style.color = "black";
    }else{
      logo.style.color = "white";
    }
  }, 1000);
})();
