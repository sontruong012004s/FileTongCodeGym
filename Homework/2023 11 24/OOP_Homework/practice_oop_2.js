/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 200cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */
class Vehicle{
    constructor(ownerFullName, vehicleType, capacity, value){
        this.ownerFullName = ownerFullName;
        this.vehicleType = vehicleType;
        this.capacity = capacity;
        this.value = value;
    }
    calculate(){
        if(this.capacity < 100) return 0.01 * this.value;
        else if (this.capacity > 100 && this.capacity <= 200) return 0.03 * this.value;
        else return 0.05 * this.value;
    }
    showInfo(){
        console.log(`
            Tên chủ xe: ${this.ownerFullName} 
            Loại xe: ${this.vehicleType}
            Dung tích: ${this.capacity}cc
            Trị giá: ${this.value.toLocaleString()} VNĐ
            Thuế nộp: ${this.calculate().toLocaleString()} VNĐ
        `);
    }
}
let Vehicle1 = new Vehicle("Nguyễn Văn A", "Wave", 50, 13000000);
let Vehicle2 = new Vehicle("Nguyễn Văn B", "Honda", 110, 22000000);

Vehicle1.showInfo();
Vehicle2.showInfo();
