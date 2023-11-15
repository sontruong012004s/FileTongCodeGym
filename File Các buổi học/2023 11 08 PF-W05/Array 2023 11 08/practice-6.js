// Bài 6: Hãy tìm và thay thế tất cả số 20 trong array thành 200
let array1 = [5, 10, 15, 20, 25, 50, 20];
for(let i = 0; i < array1.length; i++){
    if(array1[i] === 20){
        array1[i] = 200;
    }
}
console.log(array1); // Output: [5, 10, 15, 200, 25, 50, 20]