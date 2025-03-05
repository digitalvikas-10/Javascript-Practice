const clock = document.querySelector('.clock');


setInterval(function(){
 let newDate = new Date();
   clock.innerHTML = newDate.toLocaleTimeString();
},1000);
