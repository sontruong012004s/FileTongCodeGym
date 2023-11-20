function findFibo(n){
    if(n == 0 || n == 1){
        return n;
    } else{
        let f1 = 0, f2 = 1, f3;
        for(let i = 1; i < n; i++){
            f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }
        return f3;
    }
}
console.log(findFibo(6));