/*
function SayHello(name){
    console.log('----------')
    console.log('hello'+name);
    console.log('----------');

}
SayHello(' Bob');
*/
function calculateTax(amount) {
    let result=amount * 0.0025;
    return result
}
let tax=calculateTax(100);
console.log(tax)