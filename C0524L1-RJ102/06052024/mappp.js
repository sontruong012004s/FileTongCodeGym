let arr = [1, 3, 5, 2, 4, 5, 10];
// arr.map(x => {
//     console.log(x);
// })

// arr.map((x, y) => {
//     console.log(x + ' tai vi tri ' +y);
// })

// arr.map(x => {
//     if(x %2 == 0 ) {
//         console.log(x)
//     }
// });

// let t = 1;
// arr.map(x => {
//     t *= x;
// });
// console.log(t);

//in ra các phân tử lớn hơn 4 
let brr = arr.filter(item => item > 4)
console.log(brr);

let list = [
    {
        name: 'A',
        score: 10
    },
    {
        name: 'B',
        score: 8
    },
    {
        name: 'C',
        score: 8
    },
    {
        name: 'D',
        score: 9
    }
]
//dùng filter in ra cac sinh so diem >= 9
let brrL = list.filter(item => item.score >= 9);

console.log(brrL);


//tinh tổng điểm sinh viên
let totalScore = arr.reduce((total, current) => total + current, 0);

console.log(totalScore)