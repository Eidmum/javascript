function fibonacci(n){
    var final=[0,1];
    for(let i=2;i<=n;i++){
        final[i]=final[i-1]+final[i-2];

    }

    return final;

}

var ans=fibonacci(10);
console.log(ans);
