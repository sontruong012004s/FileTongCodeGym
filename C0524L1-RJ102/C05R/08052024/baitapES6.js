// 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
// 3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
// 4. Sử dụng map, tính tổng các phần tử * 2
// 5. Sử dụng reduce, tính tổng các phần tử * 2
function timMax(a, b, c) {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    return max;
}
let timMax2 = (a, b, c) => {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    return max;
}

//in ra các số chia 3 dư 2 trong mảng
let arrrr = [2, 3, 5, 8, 12, 14, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrrr.length; i++) {
    if (arrrr[i] % 3 == 2) {
        console.log(arrrr[i]);
    }
}
arrrr.map(e => {
    if (e % 3 == 2) {
        console.log(e);
    }
})
let brr = arrrr.filter(e => e % 3 == 2);
console.log(brr);

// tính tổng các phần tử * 2
let sum = 0;
for (let i = 0; i < arrrr.length; i++) {
    sum += arrrr[i] * 2;
}

let sum1 = 0;
arrrr.map(e => {
    sum1 += e * 2;
})

let sum2 = arrrr.reduce((s, e) => s + e * 2, 0);
