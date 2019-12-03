var position=0;
var slides= document.getElementsByClassName("video");
document.getElementById('prev').style.display = "none";

var maxPos = 25*(slides.length-4);
console.log("max"+maxPos);


function oneview(n) {
  if(n===1 && position>=0 && position < maxPos){
    position=position+26.25;

    document.getElementById('moves').style.left = "-"+position+"%";
  } else if (n===-1 && position>0 ){
    position=position-26.25;
    document.getElementById('moves').style.left = "-"+position+"%";
  }
  document.getElementById('moves').style.transition = "all .3s";

  //hide buttons when dont need them
  if (position>0 && position < maxPos){
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
  } else if (position===0){
    document.getElementById('prev').style.display = "none";
  } else if (position===200){
    document.getElementById('next').style.display = "none";
  }

}
