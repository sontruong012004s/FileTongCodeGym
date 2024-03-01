document.getElementById("number").addEventListener("input", function() {
    let value = this.value;
    document.getElementById("percentage").innerText = value;
});
// function changeBoder(input, erroMsg, changeBoder) {
//     if(input === '') {
//         erroMsg.style.display = 'block';
//         changeBoder.style.border = '1px solid red';
//         // document.getElementById("erros").innerHTML = "Đây là một câu hỏi bắt buộc";
//     } else {
//         erroMsg.style.display = 'none';
//         changeBoder.style.border = 'block'
//     }
// }

// document.getElementById('fullname').addEventListener('blur', function() {
//     let input = this.value.trim();
//     let erroMsg = document.getElementById('erro-fullName'); 
//     let changeBoderElem = document.getElementsByClassName("intro1")[0];
//     changeBoder(input, erroMsg, changeBoderElem);
// });
// document.getElementById('other-classRoom').addEventListener('blur', function() {
//     let input = this.value.trim();
//     let erroMsg = document.getElementById('erro-classRoom'); 
//     let changeBoderElem = document.getElementsByClassName("intro1")[1];
//     changeBoder(input, erroMsg, changeBoderElem);
// });
// document.getElementById('other-product').addEventListener('blur', function() {
//     let input = this.value.trim();
//     let erroMsg = document.getElementById('erro-product'); 
//     let changeBoderElem = document.getElementsByClassName("intro1")[3];
//     changeBoder(input, erroMsg, changeBoderElem);
// });

