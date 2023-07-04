/*var person={name:"Daph",Age:6,city:"Kisumu",
greet:function(){
    console.log(`Hello my name is ${this.name}`)
}
}
console.log(person.greet())
function multiply(a,b){
    return a*b
}
console.log(multiply(2,3))
function isEven(a){
    if(a%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(9))
function getMax(a,b){
    if(a>b){
        return a;
    }
    else{
        return b
    }
}
console.log(getMax(3,5))
function calculateGrade(a){
    if(a>=90){
        return "A"
    }
    else if(a>=80 && a<90){
        return "B"
    }
    else if(a>=70 && a<80){
        return "C"
    }
    else if(a>=60 && a<70){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(calculateGrade(80))
*/
function isLeapYear(year){
    if(year%4==0){
        return true
    }
    else{
        return false
    }
}
console.log(isLeapYear(2023))