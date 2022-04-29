/**6!=1*2*3*4*5*6
4!=4*3*2*1*/



function calculateFactorial(num){
    var i=1,factorial=1;
    while(i<=num){
        factorial=factorial*i;
        i++;
    }
    return factorial;

}
var ans=calculateFactorial(3);
console.log("the factorial is " + ans);
