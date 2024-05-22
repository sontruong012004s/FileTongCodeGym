// 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
// 3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
// 4. Sử dụng map, tính tổng các phần tử * 2
// 5. Sử dụng reduce, tính tổng các phần tử * 2
const maxNumber = (a, b, c) => Math.max(a, b, c);
console.log("Số lớn nhất là:", maxNumber(1, 8, 15));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map((e) => {
  if (e % 3 == 2) {
    console.log("Các số chia 3 dư 2 trong mảng:", e);
  }
});
let brr = numbers.filter((e) => e % 3 == 2);
console.log("Các số chia 3 dư 2 trong mảng filter:", brr);


// 4-5
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] * 2;
}

let sum1 = 0;
numbers.map((e) => {
  sum1 += e * 2;
});

let sum2 = numbers.reduce((s, e) => s + e * 2, 0);

console.log(sum, sum1, sum2)
