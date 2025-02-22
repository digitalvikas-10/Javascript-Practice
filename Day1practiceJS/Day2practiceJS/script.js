//  question 1. find the largest of three numbers.
 function largestNUmber(a,b,c){
    // by using if else satements
    if(a>b&&a>c){
     console.log("a is the largest number")
    }else if(b>a&&b>c){
     console.log("b is the largest number");
    }else{
        console.log("c is the largest number");
        
    }
    // by using switch case..
    switch(true){
        case (a>b&&a>c):
            console.log("a is the largest number");
            break;
            case  (b>a&&b>c):
                console.log("b is the largest number");
                break;
                case (c>a&&c>b):
                    console.log("c is the largest number");
                  break;
                  default:
                    console.log("all number  are equal");
    }
     
}

largestNUmber(2098,40322,324231);

// question 2.write a program to check if a number is positivve , negative or zero.

function numberChecker(num){
    switch(true){
        case(num>0):
            console.log("the number is positive");
            break;
            case (num<0):
                console.log("the number is negative");
                break;
                default:
                    console.log("the number is zero");
                    
                
    }
}

numberChecker(2);

// question 3. check if a year is a leap year or not.

let btn = document.querySelector("button");
function checkYear(){
    let year = document.getElementById("year").value;
    let result = document.getElementById("msg");
    if(year % 4 === 0){
       result.innerHTML = "the year is a leap year";
    }
    else{
        result.innerHTML = "the year is not a leap year";
    }
}

btn.addEventListener("click", checkYear);

// question 4. implement a simple calculator.
let operator = prompt("Enter the operator to calculate");

function calculator(a,b,c,operator){
    switch(c){
        case "+":
        console.log("the sum of the number is",a+b+c);
        break;
        case "*":
            console.log("the product of the number is",a*b*c);
            break;
            case "-":
                console.log("the subtraction of the give value is :",a-b-c);

                break;
                case "/":
                    console.log("the divison of the given value is ",a/b/c);
                    break;
                    case "%":
                        console.log("the modulud of the given value is", a%b);
                        break;
                        default:
                            console.log("invalid operator");
    }
}
calculator(2,3,4);
