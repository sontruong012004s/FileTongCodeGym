/// dùng map tính tích các phần tử trong mảng
let arr = [1,2,3,4];
arr.map(x => {
    if(x %2 === 0) {
        console.log(x);
    }
})
arr.map((x, y) => {
    let z = x * y;
    console.log(`${x} tại vị trí ${y} tích: ${z}`);
})