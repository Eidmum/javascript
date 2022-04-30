function fibonacci(n){
    if(n==0)
        return [0];
    else if(n==1)
        return [0,1];
    var fibo=fibonacci(n-1);
    var nthElement=fibo[n-1]+fibo[n-2];
    fibo.push(nthElement);
    return fibo;
   
      
    
}

console.log(fibonacci(10));
