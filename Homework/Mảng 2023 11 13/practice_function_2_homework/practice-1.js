/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isLeapYear(2016)
 * 
 * Output:
 * false
 *  */ 
function isLeapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else{
        return false;
    }
}
isLeapYear(2016);