let arr = [1,2,3,4];


let tich = arr.reduce((t, item) => t * item, 1);
console.log(tich);


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
        score: 9
    }
]
// tính tổng điểm sinh viên = reducee
let s = list.reduce((x, y) => x + y.score, 0);
console.log(s);