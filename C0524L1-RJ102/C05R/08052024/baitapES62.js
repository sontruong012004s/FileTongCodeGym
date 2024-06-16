// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce

//Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
function isSNT(x) {
    if (x < 2) {
        return false;
    }
    if (x == 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}
let isSNT1 = x => {
    if (x < 2) {
        return false;
    }
    if (x == 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

//Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
let arr = [];
let inMapSNT = arr => {
    arr.map(e => {
        if (isSNT(e)) {
            console.log(e);
        }
    })
}
