document.getElementById("login").addEventListener("click", () => {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let matchedUser = storedUsers.find(user => user.username === inputUsername && user.password === inputPassword);

    if(matchedUser || inputUsername === "Admin" && inputPassword === "Admin"){
        alert("Đăng nhập thành công!");
        window.location.href = "../form.html";
    } else {
        alert("Sai tài khoản hoặc mật khẩu");
    }
});
