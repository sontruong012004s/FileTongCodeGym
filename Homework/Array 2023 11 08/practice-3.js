// Bài 3: Cho sẵn một mảng  chứa các số tự nhiên. 
// Bình phương các phần tử trong mảng và lưu vào một mảng  mới.
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [];
for(let i = 0; i < array1.length; i++){
    array2.push(array1[i] * array1[i]);
}

console.log(array2); // Output: [1, 4, 9, 16, 25, 36, 49]