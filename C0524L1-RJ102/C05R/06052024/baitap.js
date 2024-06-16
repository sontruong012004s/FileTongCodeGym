// Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
// Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
// Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
// Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
// Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
let array = [1,121,3,4,5]
let sumArray = array => {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(array));

let squareArray1 = n => { return n*n; }
console.log(squareArray1(5));

let squareArray2 = array => {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i]*2);
    }
    return newArr;
}
console.log(squareArray2(array));

let filterGreaterThan = (array, x) => {
    let newArr = [];
    for(let i = 0; i <= array.length; i++) {
        if(array[i] > x) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
console.log(filterGreaterThan(array, 2));

let maxInArray = array => {
    let max = array[0];
    for(let i = 0; i <= array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(maxInArray(array));

let avgArray = array => sumArray(array)/array.length;
console.log(avgArray(array))