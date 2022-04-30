function calculateFactorial(n){
    if(n==0)
        return 1;
    return n*calculateFactorial(n-1);
}


let ans=calculateFactorial(6);
console.log(ans);
