// Bài 5: Đếm xem trong array có tổng cộng bao nhiêu số 20
let array1 = [5, 10, 15, 20, 25, 50, 20];
let total = 0;
for(let i = 0; i < array1.length; i++){
    if(array1[i] === 20){
        total += 1;
    }
}
console.log(total); // Output: 2