let list = [
    {
        id: 1,
        name: 'A',
        price: 10,
        quantity: 5
    },
    {
        id: 2,
        name: 'B',
        price: 30,
        quantity: 9
    },
    {
        id: 3,
        name: 'C',
        price: 200,
        quantity: 1
    }
]

list.map((x) => {
    console.log(`ID: ${x.id} - Name: ${x.name} - Price: ${x.price} - Quantity: ${x.quantity}`);
});

list.map((x) => {
    if(x.price >= 100) {
        console.log(`Sử dụng Map tìm các sản phẩm > 100\nID: ${x.id} - Name: ${x.name} - Price: ${x.price} - Quantity: ${x.quantity}`);
    }
});


let filterMax100 = list.filter(x => x.price >= 100);
    console.log(filterMax100);


let sum = 0;
list.map((x) => {
    sum += x.price * x.quantity;
})
console.log(`(Map) Tổng tiền hàng nếu bán hết sản phẩm: ${sum}`)

let x = list.reduce((x, item) => x + item.price * item.quantity, 0)
console.log(`(Reduce) Tổng tiền hàng nếu bán hết sản phẩm: ${x}`)


