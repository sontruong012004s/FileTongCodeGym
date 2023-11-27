/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */



class Rectangle{
    constructor(length, height){
        this.length = length;
        this.width = height;
    }
    acrea(){
        return this.length * this.width;
    }
    periMeter(){
        return 2 * (this.length * this.width);
    }
    showInfo(){
        console.log(`
            Chiều dài HCN là: ${this.length}
            Chiều rộng HCN là: ${this.width}
            Chu vi HCN là: ${this.acrea()}
            Diện tích HCN là: ${this.periMeter()}
        `);
    }
}
let Rectangle1 = new Rectangle(20, 50);
Rectangle1.showInfo();