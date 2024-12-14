var i = 0;
var n = 1;
var colorArray = ['red', 'yellow', 'green']
function light() {
    var light = document.getElementsByClassName('light')
    for (let j = 0; j < light.length; j++) {
        light[j].style.background= "white";
        light[j].innerHTML= "";
    }
    light[i].style.background = colorArray[i]
    if(i< light.length){
      if(n<=3){
        light[i].innerHTML=n
        n++
      }  
    }
    if(n==4){
        i++
        n=1;
        if(i==3){
            i=0
        }
    }
}
setInterval(light, 3000)