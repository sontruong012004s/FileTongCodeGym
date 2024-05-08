// Tạo mảng sản phẩm có id, name, price, quantity.
// 1. Sử dung map, in ra name và price cua cac sản phẩm
// 2. Sử dụng map, tìm ra các  sản phẩm có giá > 100
// 3. Sử dụng filter, tìm ra các  sản phẩm có giá > 100
// 4. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)
// 5. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)

const products = [
    { 
        id: 1, 
        name: "Sản phẩm 1", 
        price: 50, 
        quantity: 20 
    },
    {
        id: 2, 
        name: "Sản phẩm 2", 
        price: 4500, 
        quantity: 1
    }
];
const NamePrice = products.map(product => ({ name: product.name, price: product.price }));
const Price100Map = products.filter(product => product.price > 100).map(product => product.name);
const Price100Filter = products.filter(product => product.price > 100);

console.log("Tên và giá của các sản phẩm:", NamePrice);
console.log("Tên các sản phẩm có giá trên 100:", Price100Map);
console.log("Các sản phẩm có giá trên 100:", Price100Filter);


