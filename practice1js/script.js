const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function(button){
    button.addEventListener('click', function(e){
       console.log(e.target.id)
        if (e.target.id ==="blue"){
            body.style.backgroundColor = "blue"
        }
         if (e.target.id ==="black"){
            body.style.backgroundColor = "black"
        }
         if (e.target.id ==="yellow"){
            body.style.backgroundColor = "yellow"
        }
          if (e.target.id ==="red"){
            body.style.backgroundColor = "red"
        }
    })
})