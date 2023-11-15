/**
 * Bài 2: Viết hàm transformStr() nhận vào tham số string và 
 * in ra string ở dạng uppercase và lowercase. Ví dụ: 
 * 
 * transformStr('Function Is Magic!')
 * 
 * Output:
 * Lowercase: function is magic!
 * Uppercase: FUNCTION IS MAGIC!
 */
function transformStr(string) {
    console.log(`Lowercase: ${string.toLowerCase()}`);
    console.log(`Uppercase: ${string.toUpperCase()}`);
}

transformStr('Function Is Magic!');