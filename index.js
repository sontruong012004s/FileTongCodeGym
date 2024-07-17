// let a = "$Title";
// let b = "$TitleScan";
// let ketqua = "";
// function normalizeAndSplitWords(str) {
//   str = str.replace(/\s+/g, "").trim();
//   return str.split("");
// }
// function compareFirst20Words(str1, str2) {
//   if (str1 === "" || str2 === "") {
//     return false;
//   }
//   const words1 = normalizeAndSplitWords(str1);
//   const words2 = normalizeAndSplitWords(str2);
//   const minLength = Math.min(words1.length, words2.length, 20);
//   for (let i = 0; i < minLength; i++) {
//     if (words1[i] !== words2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// ketqua = compareFirst20Words(a, b);
// return ketqua;

// ketqua = compareFirst20Words(a, b);
// return ketqua;

// let data1 = "";
// function getTextFromXPath() {
//   let data = "";
//   var xpath =
//     '(//div[not(@role="feed")]//div[@aria-posinset="$X"]//div[@data-virtualized="false"]//div[@style="color: rgb(255, 255, 255); font-size: 30px; font-style: normal; font-weight: bold; text-align: center;"])[2] | (//div[not(@role="feed")]//div[@aria-posinset="$X"]//DIV[@dir="auto"])[1]';
//   var result = document.evaluate(
//     xpath,
//     document,
//     null,
//     XPathResult.FIRST_ORDERED_NODE_TYPE,
//     null
//   );
//   var element = result.singleNodeValue;
//   if (element) {
//     data = element.textContent;
//   }
//   return data;
// }
// let result = getTextFromXPath();
// data1 = result;
// return data1;

//form//div[@role="presentation"]//div[@data-lexical-editor="true"]

// const data =
//   "Video review hành trình chuyến Thái Lan cuối tháng này 11 của mình. Video có thời hạn nhất định nên video này chủ yếu review lịch trình";
// let formattedData = data;
// if (data.includes("\\n")) {
//   formattedData = data.replace(/\\n/g, "<br>");
// }
// const dataToType = formattedData;
// const richInput = document.querySelector(
//   '[aria-label="What\'s on your mind?"]'
// );
// richInput.focus();
// document.execCommand("insertHTML", false, dataToType);
const fs = require('fs');

fs.readFile('C:\\Users\\sontr\\Downloads\\4yskboJ1.jpg', (err, data) => {
    if (err) throw err;
    const base64Image = `data:image/jpeg;base64,${data.toString('base64')}`;
    console.log(base64Image);
});
