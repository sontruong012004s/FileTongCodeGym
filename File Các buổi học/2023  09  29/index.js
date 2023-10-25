// function testcode(){
//     let result, C, F
//     result = "Kết quả: "
//     C =  prompt("Nhap gia tri C: ")
//     F = (9*C)/5 + 32

//     document.write(result + F);
// }
// function  testcode(){
//     let N,M;
//     N = Math.floor(Math.random() * 9 + 1);
//     M = prompt("Nhap M")
//     if(N==M){
//         document.write("Dự đoán đúng");
//     }
//     else{
//         document.write("Dự đoán sai");
//     }
// }
// function testcode(){
//     let T, L, H, DTB;
//     T = parseFloat(prompt("Nhập điểm toán: "))
//     L = parseFloat(prompt("Nhập điểm lý: "))
//     H = parseFloat(prompt("Nhập điểm hóa: "))
//     DTB = (T + L + H) / 3
//     result = "Điểm trung bình: "
//     document.write(result + DTB.toFixed(2));
// }
// function testcode(){
//     let money = prompt("Nhập số tiền Đô la Mỹ")
//     let VND = 23000;
//     let result = money * VND;
//     alert("Số tiền Việt Nam Đồng: " + result + " VND")
    
// }
function testcode(){
    let A, B, C, max
    A = parseFloat(prompt("Nhập số A"))
    B = parseFloat(prompt("Nhập số B"))
    C = parseFloat(prompt("Nhập số C"))
    if(A >= B && A >= C){
        max ==A
    }
    else if(B >= A && B >= C){
        max = B
    }
    else{
        max = C
    }
    document.write("Số lớn nhất trong 3 số " + A + ", " + B + ", " + C + " là: " + max )
}

