// Tạo ra một bản mô phỏng xe hơi, từ đó tạo ra các đối tượng xe hơi thực tế

// tạo class Car ~ mô phỏng đối tượng cần quần lý trong chương trình

class Car {
    // mô tả thuộc tính
    carName = "VinFast VF 8";
    brandName = "VinFast";
    carColor = "red";

    // Mô tả các hành động/ phương thức
    moveForward(){
        console.log("The car is moving forward!");
    }
}

// tạo và tương tác với đối tượng của class Car
car1 = new Car();
console.log(car1.carName);
console.log(car1.brandName);
console.log(car1.carColor);

car1.moveForward();