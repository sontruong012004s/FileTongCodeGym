// const now = new Date();
// const day = now.getDate();
// const month = now.getMonth() + 1;
// const year = now.getFullYear();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const formattedDate = `${day}-${month}-${year}`;
// const formattedTime = `${hours}:${minutes}`;
// console.log(`Ngày hiện tại: ${formattedDate}-${formattedTime}`);




// let hrefValue = "/@user4810242853770";
// hrefValue = hrefValue.replace(/\/@/g, "");
// hrefValue = hrefValue.replace(/\?lang=en/g, "");
// console.log(hrefValue);

// const selectElement = document.getElementById('month');
// const options = selectElement.querySelectorAll('option');
// const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
// selectElement.selectedIndex = randomIndex;
// console.log(`Selected month: ${options[randomIndex].text}`);
var data = `dog peanut enough post middle slight grape protect piano trumpet caution half force erosion thunder swamp child service session morning liberty excuse picture struggle maximum rich skull denial chimney pen neck course west assist melody way jungle quote salad end few slot idea borrow front man clinic display duty salad ticket guard science rubber rack ticket auto blame either rude rug fossil yard banana bulk million change tape silk mammal elegant wall`;

// Chuyển dữ liệu thành mảng bằng cách tách nó dựa trên dấu cách và dấu xuống dòng
var dataArray = data.split(/\s+/);

// Biến để lưu trữ chuỗi định dạng
var formattedString = "[";

// Duyệt qua mảng và thêm mỗi phần tử vào chuỗi định dạng
for (var i = 0; i < dataArray.length; i++) {
    formattedString += '"' + dataArray[i] + '"';
    // Nếu không phải là phần tử cuối cùng, thêm dấu phẩy và khoảng trắng
    if (i < dataArray.length - 1) {
        formattedString += ", ";
    }
}

formattedString += "]";

// Hiển thị chuỗi định dạng trong tài liệu HTML
document.write(formattedString);
