function isPrime(n){
    for(let i=2;i<n;i++)
        {
            if(n%i==0)
                return "Not a prime number";
        }
    return "Is a prime number";
}

var ans=isPrime(5);
console.log(ans);
