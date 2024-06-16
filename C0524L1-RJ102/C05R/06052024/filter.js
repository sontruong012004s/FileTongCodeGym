let arr = [1,2,3,4];

//in ra các phần tử > 4
let brr = arr.filter(item => item > 2)
console.log(brr);


//dùng filter in ra các sinh viên có điểm >= 9
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
let listBrr = list.filter(x => x.score >= 9)
console.log(listBrr);