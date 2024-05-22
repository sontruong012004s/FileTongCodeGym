// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce

const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};

// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = arr.map(num => isPrime(num) ? num : null).filter(num => num !== null);

console.log("Các số nguyên tố trong mảng:", primeNumbers);
function isPrime1(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
isPrime1(3)