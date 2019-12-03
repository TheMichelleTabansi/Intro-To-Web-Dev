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

//second slider controls

var position2=0;
var slides2= document.getElementsByClassName("video");
document.getElementById('prev2').style.display = "none";

var maxPos2 = 25*(slides2.length-4);
console.log("max"+maxPos2);

function oneview2(n) {
  if(n===1 && position2>=0 && position2 < maxPos2){
    position2=position2+26.25;

    document.getElementById('moves2').style.left = "-"+position2+"%";
  } else if (n===-1 && positio2n>0 ){
    position2=position2-26.25;
    document.getElementById('moves2').style.left = "-"+position2+"%";
  }
  document.getElementById('moves2').style.transition = "all .3s";

  //hide buttons when dont need them
  if (position2>0 && position2 < maxPos){
    document.getElementById('prev2').style.display = "block";
    document.getElementById('next2').style.display = "block";
  } else if (position2===0){
    document.getElementById('prev2').style.display = "none";
  } else if (position2===200){
    document.getElementById('next2').style.display = "none";
  }
}

//third slider controls

var position3=0;
var slides3= document.getElementsByClassName("video");
document.getElementById('prev3').style.display = "none";

var maxPos3 = 25*(slides3.length-4);
console.log("max"+maxPos3);


function oneview3(n) {
  if(n===1 && position3>=0 && position3 < maxPos3){
    position3=position3+26.5;

    document.getElementById('moves3').style.left = "-"+position3+"%";
  } else if (n===-1 && position3>0 ){
    position3=position3-26.5;
    document.getElementById('moves3').style.left = "-"+position3+"%";
  }
  document.getElementById('moves3').style.transition = "all .3s";

  //hide buttons when dont need them
  if (position3>0 && position3 < maxPos3){
    document.getElementById('prev3').style.display = "block";
    document.getElementById('next3').style.display = "block";
  } else if (position3===0){
    document.getElementById('prev3').style.display = "none";
  } else if (position3>=maxPos3){
    document.getElementById('next3').style.display = "none";
  }
}
