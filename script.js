let affichage = document.getElementById("affichage");
let num = document.querySelectorAll(".number");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let multiplication = document.getElementById("multiplication");
let div = document.getElementById("div");
let result = document.getElementById("result");
let rest = document.getElementById("rest");
let del = document.getElementById("del");
let aff ="" ;
let aff2 ="";
let number = 0 ;
let number2 = 0;
let turn ="" ;
let rslt = 0 ;

/* themes */
let theme1 = document.querySelector(".circle1");
let theme2 = document.querySelector(".circle2");
let theme3 = document.querySelector(".circle3");
let container = document.querySelector(".container");
let Table = document.querySelector(".table-calc");
let Affichage = document.querySelector(".affichage");
let calc = document.querySelector("header h2");
let th = document.querySelector(".right-header p");
let tblTh = document.querySelector(".theme");
let themechange = document.querySelector(".change-theme");

for(let i=0 ; i < 11 ; i++){
    
   num[i].onclick = function(){
     if(turn === "" ){
      aff = aff + this.innerHTML ;
        affichage.innerHTML = `${aff}`;
     number = Number(aff);
     
     }
     else if(turn === "minus number"){
      aff = aff + this.innerHTML ;
      affichage.innerHTML = `${aff}`;
      number = Number(aff);
      
     }
      else {
        aff2 = aff2 + this.innerHTML ;
        affichage.innerHTML = `${aff2}`;
        number2 = Number(aff2);
        console.log(number2)
     }
   }
}
minus.onclick = function(){
    if(aff[aff.length-1] !== "+" && aff[aff.length-1] !== "/" && aff[aff.length-1] !== "x" && aff[aff.length-1] !== "-" && aff !== "" ){
   aff = aff + "-";
   affichage.innerHTML = `${aff}`;
   turn = "minus";
   console.log("nn");
    }
    else if( aff === "" && rslt === 0 ){
      turn = "minus number";
      aff = aff + "-";
      affichage.innerHTML = `${aff}`;
      console.log("ff");
    }
     else {
        aff = aff.slice(0, -1) + "-";
       affichage.innerHTML = `${aff}`;
       turn = "minus";
    }
}
div.onclick = function(){
    if(aff[aff.length-1] !== "+" && aff[aff.length-1] !== "/" && aff[aff.length-1] !== "x" && aff[aff.length-1] !== "-" ){
        aff = aff + "/";
        affichage.innerHTML = `${aff}`;
        turn = "div";
         } else {
             aff = aff.slice(0, -1) + "/";
            affichage.innerHTML = `${aff}`;
            turn = "div";
         }
 }
 plus.onclick = function(){
    if(aff[aff.length-1] !== "+" && aff[aff.length-1] !== "/" && aff[aff.length-1] !== "x" && aff[aff.length-1] !== "-" ){
        aff = aff + "+";
        affichage.innerHTML = `${aff}`;
        turn = "plus";
         } else {
             aff = aff.slice(0, -1) + "+";
            affichage.innerHTML = `${aff}`;
            turn = "plus";
         }
 }
 multiplication.onclick = function(){
    if(aff[aff.length-1] !== "+" && aff[aff.length-1] !== "/" && aff[aff.length-1] !== "x" && aff[aff.length-1] !== "-" ){
        aff = aff + "x";
        affichage.innerHTML = `${aff}`;
        turn = "multi";
         } else {
             aff = aff.slice(0, -1) + "x";
            affichage.innerHTML = `${aff}`;
            turn = "multi";
         }
 }
 
 result.onclick = function(){
      if(turn === "plus"){
         rslt = number + number2 ;
      }
      if(turn === "minus"){
         rslt = number - number2 ;
        }
        if(turn === "div"){
         rslt = number / number2;
        }
        if(turn === "multi"){
         rslt = number * number2;
        }
        affichage.innerHTML = ``;
        setTimeout( function(){
         affichage.innerHTML = `${rslt}`;
      }, 100);
        aff = "";
        number = rslt ;
        number2 = 0 ;
        aff2 ="";
        turn ="";
 }
 del.onclick = function() {
   if(turn === "" || turn === "minus number") {
      if(aff.length > 0) {
         aff = aff.slice(0, -1);
         affichage.innerHTML = `${aff}`;
         number = Number(aff) || 0;
      }
   } else {
      if(aff2.length > 0) {
         aff2 = aff2.slice(0, -1);
         affichage.innerHTML = `${aff2}`;
         number2 = Number(aff2) || 0;
      }
   }
}
rest.onclick = function() {
   aff = "";
   aff2 = "";
   number = 0;
   number2 = 0;
   turn = "";
   affichage.innerHTML = "0";
}


theme1.onclick = function(){
   document.body.style.opacity = 0.3 ;
   setTimeout(() => {
      document.body.style.opacity = 1 ;
      theme1.style.visibility = "hidden";
   theme2.style.visibility = "visible";
   theme2.style.opacity ="1";
   theme1.style.opacity = "0";
   container.style.backgroundColor = "hsl(0, 0%, 90%)";
   Table.style.backgroundColor = "hsl(0, 5%, 81%)";
   Affichage.style.backgroundColor = "hsl(0, 0%, 93%)";
   affichage.style.color ="hsl(60, 10%, 19%)";
   for(let i=0 ; i<11 ; i++){
   num[i].style.color ="hsl(60, 10%, 19%)";
   num[i].style.backgroundColor = "hsl(45, 7%, 89%)";
   num[i].style.boxShadow = "inset 0px -4px  2px 0px hsl(35, 11%, 61%)";
   } ;
   minus.style.backgroundColor ="hsl(45, 7%, 89%)";
   plus.style.backgroundColor ="hsl(45, 7%, 89%)";
   multiplication.style.backgroundColor ="hsl(45, 7%, 89%)";
   div.style.backgroundColor ="hsl(45, 7%, 89%)";
   del.style.backgroundColor = "hsl(185, 42%, 37%)";
   result.style.backgroundColor = "hsl(25, 98%, 40%)";
   rest.style.backgroundColor = "hsl(185, 42%, 37%)";
   calc.style.color ="hsl(60, 10%, 19%)";
   th.style.color = "hsl(60, 10%, 19%)";
   tblTh.style.backgroundColor ="hsl(0, 5%, 81%)";
   theme2.style.backgroundColor = "hsl(25, 98%, 40%)";
   themechange.classList.add("chng");
   del.style.boxShadow = "inset 0px -4px  2px 0px hsl(185, 58%, 25%)";
   rest.style.boxShadow = "inset 0px -4px  2px 0px hsl(185, 58%, 25%)";
   plus.style.boxShadow = "inset 0px -4px  2px 0px hsl(35, 11%, 61%)";
   multiplication.style.boxShadow = "inset 0px -4px  2px 0px hsl(35, 11%, 61%)";
   minus.style.boxShadow = "inset 0px -4px  2px 0px hsl(35, 11%, 61%)";
   div.style.boxShadow = "inset 0px -4px  2px 0px hsl(35, 11%, 61%)";
   result.style.boxShadow = "inset 0px -4px  2px 0px hsl(25, 99%, 27%)";
   },(600));
   
}

theme2.onclick = function(){
   document.body.style.opacity = 0.3 ;
   setTimeout(() => {
      document.body.style.opacity = 1 ;
      theme2.style.visibility = "hidden";
   theme3.style.visibility = "visible";
   theme3.style.opacity ="1";
   theme2.style.opacity = "0";
   container.style.backgroundColor = "hsl(268, 75%, 9%)";
   Table.style.backgroundColor = "hsl(268, 71%, 12%)";
   Affichage.style.backgroundColor = "hsl(268, 71%, 12%)";
   affichage.style.color ="hsl(52, 100%, 62%)";
   for(let i=0 ; i<11 ; i++){
   num[i].style.color ="hsl(52, 100%, 62%)";
   num[i].style.backgroundColor = "hsl(268, 47%, 21%)";
   num[i].style.boxShadow = "inset 0px -4px  2px 0px hsl(290, 70%, 36%)";
   } ;
   minus.style.backgroundColor ="hsl(268, 47%, 21%)";
   plus.style.backgroundColor ="hsl(268, 47%, 21%)";
   multiplication.style.backgroundColor ="hsl(268, 47%, 21%)";
   div.style.backgroundColor ="hsl(268, 47%, 21%)";
   del.style.backgroundColor = "hsl(281, 89%, 26%)";
   result.style.backgroundColor = "hsl(176, 100%, 44%)";
   rest.style.backgroundColor = "hsl(281, 89%, 26%)";
   calc.style.color ="hsl(52, 100%, 62%)";
   th.style.color = "hsl(52, 100%, 62%)";
   tblTh.style.backgroundColor ="hsl(268, 75%, 9%)";
   theme3.style.backgroundColor = "hsl(176, 100%, 44%)";
   themechange.classList.add("chng2");
   del.style.boxShadow = "inset 0px -4px  2px 0px hsl(285, 91%, 52%)";
   rest.style.boxShadow = "inset 0px -4px  2px 0px hsl(285, 91%, 52%)";
   plus.style.boxShadow = "inset 0px -4px  2px 0px hsl(290, 70%, 36%)";
   multiplication.style.boxShadow = "inset 0px -4px  2px 0px hsl(290, 70%, 36%)";
   minus.style.boxShadow = "inset 0px -4px  2px 0px hsl(290, 70%, 36%)";
   div.style.boxShadow = "inset 0px -4px  2px 0px hsl(290, 70%, 36%)";
   result.style.boxShadow = "inset 0px -4px  2px 0px hsl(177, 92%, 70%)";
   plus.style.color ="hsl(52, 100%, 62%)";
   minus.style.color ="hsl(52, 100%, 62%)";
   div.style.color ="hsl(52, 100%, 62%)";
   multiplication.style.color ="hsl(52, 100%, 62%)";
   },(600));
   
}

theme3.onclick = function(){
   document.body.style.opacity = 0.3 ;
   setTimeout(() => {
      document.body.style.opacity = 1 ;
      theme1.style.visibility = "visible";
   theme3.style.visibility = "hidden";
   theme1.style.opacity ="1";
   theme3.style.opacity = "0";
   container.style.backgroundColor = "hsl(222, 26%, 31%)";
   Table.style.backgroundColor = "hsl(223, 31%, 20%)";
   Affichage.style.backgroundColor = "hsl(224, 36%, 15%)";
   affichage.style.color ="white";
   for(let i=0 ; i<11 ; i++){
   num[i].style.color ="hsl(221, 14%, 31%)";
   num[i].style.backgroundColor = "hsl(30, 25%, 89%)";
   num[i].style.boxShadow = "inset 0px -4px  2px 0px hsl(28, 16%, 65%)";
   } ;
   minus.style.backgroundColor ="hsl(30, 25%, 89%)";
   plus.style.backgroundColor ="hsl(30, 25%, 89%)";
   multiplication.style.backgroundColor ="hsl(30, 25%, 89%)";
   div.style.backgroundColor ="hsl(30, 25%, 89%)";
   del.style.backgroundColor = "hsl(225, 21%, 49%)";
   result.style.backgroundColor = "hsl(6, 63%, 50%)";
   rest.style.backgroundColor = "hsl(225, 21%, 49%)";
   calc.style.color ="hsl(0, 0%, 100%)";
   th.style.color = "hsl(0, 0%, 100%)";
   tblTh.style.backgroundColor ="hsl(223, 31%, 20%)";
   theme1.style.backgroundColor = "hsl(6, 63%, 50%)";
   themechange.classList.remove("chng");
   themechange.classList.remove("chng2");
   del.style.boxShadow = "inset 0px -4px  2px 0px hsl(221, 14%, 31%)";
   rest.style.boxShadow = "inset 0px -4px  2px 0px hsl(221, 14%, 31%)";
   plus.style.boxShadow = "inset 0px -4px  2px 0px hsl(28, 16%, 65%)";
   multiplication.style.boxShadow = "inset 0px -4px  2px 0px hsl(28, 16%, 65%)";
   minus.style.boxShadow = "inset 0px -4px  2px 0px hsl(28, 16%, 65%)";
   div.style.boxShadow = "inset 0px -4px  2px 0px hsl(28, 16%, 65%)";
   result.style.boxShadow = "inset 0px -4px  2px 0px hsl(6, 70%, 34%)";
   plus.style.color ="hsl(221, 14%, 31%)";
   minus.style.color ="hsl(221, 14%, 31%)";
   div.style.color ="hsl(221, 14%, 31%)";
   multiplication.style.color ="hsl(221, 14%, 31%)";
   },(600));
   
}