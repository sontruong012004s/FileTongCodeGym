/**
 * Viết hàm findPrimes() nhận vào hai số nStart, nEnd và in ra tất cả số nguyên tố trong khoảng [nStart, nEnd]
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * ifindPrimes(2, 24)
 * 
 * Output:
 * 2
 * 3
 * 5
 * 7
 * 11
 * 13
 * 17
 * 19
 * 23
 *  
 * */ 

function isPrimeNumber(number) {
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

function findPrimes(nStart, nEnd) {
    for(let i = nStart; i <= nEnd; i++){
        if(isPrimeNumber(i)) console.log(i);
    }
}

findPrimes(2, 24);
