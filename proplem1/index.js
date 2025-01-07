
//With the example, we can see the summation will be calculated from 1 to n. so i will assume that n > 0
// So with n <= 0, I will return 0
var sum_to_n_a = function(n) {
    if(n <=0) return 0
    if(n===1) return 1
    return n + sum_to_n_a(n-1)
};

var sum_to_n_b = function(n) {
    if(n <=0) return 0
    let sum=0,tmp=n
    while(tmp>0) {
        sum += tmp
        tmp--
    }
    return sum
};

var sum_to_n_c = function(n) {
    if(n <=0) return 0
    const sum = ((n+1)*n)/2
    return sum
};

console.log(sum_to_n_a(5)) // Outputs: 15
console.log(sum_to_n_b(5)) // Outputs: 15
console.log(sum_to_n_c(5)) // Outputs: 15