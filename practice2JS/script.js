const form = document.querySelector('form');

form.addEventListener('submit', function(e){
   e.preventDefault();
   const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('.result');
   const instruction = document.querySelector('.instruction');
    if(height ===''|| weight <0 || isNaN(height)){
          result.innerHTML = `please provide a valid number ${height}`;
 }
    else if(weight ===''|| weight < 0 || isNaN(weight)){
          result.innerHTML = `please provide a valid number ${weight}`;
    }else{
        const bmi = weight/(height*height / 10000).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;
        if(bmi <= 18.6){
            instruction.innerHTML = 'You are underweight';
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            instruction.innerHTML = 'You are Fit';
        }
        if(bmi > 24.9){
            instruction.innerHTML = 'You are Overweight';
        }
    }

})