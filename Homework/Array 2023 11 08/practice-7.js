//  Hãy tạo ra một array mới bằng cách gộp hai array ban đầu.
let array1 = ["Hello ", "take "];
let array2 = ["Dear", "Sir"];
let array3 = [];
for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
        array3.push(array1[i] + array2[i]);
    }
}
console.log(array3); // Output: ["Hello Dear", "Hello Sir", "take Dear", "take Sir"]