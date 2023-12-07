document.getElementById("reg").addEventListener("click", () => {
    let inputUsername = document.getElementById("username").value;
    let inputPassword1 = document.getElementById("password1").value;
    let inputPassword2 = document.getElementById("password2").value;
    if(inputUsername === "" || inputPassword1 === "" || inputPassword2 === ""){
        alert("Vui lòng điền đầy đủ dữ liệu");
    } else{
        let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        let existingUsername = existingUsers.find(user => user.username === inputUsername);
        if(existingUsername){
            alert("Username đã đăng ký, vui lòng chọn username khác");
        } else if (inputPassword1 === inputPassword2) {
            existingUsers.push({
                username: inputUsername,
                password: inputPassword1
            });
            localStorage.setItem("users", JSON.stringify(existingUsers));
            alert("Đăng ký thành công!");
            clearInput();
        } else {
            document.getElementById("erroPW").innerText = "Password không khớp";
        }
    }
});

function clearInput(){
    document.getElementById("username").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("erroPW").innerText = "";
}
