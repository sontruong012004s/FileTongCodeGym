function letters(){
    let RecipienName, Address, Date;
    RecipienName = prompt("Tên người nhận");
    Address = prompt("Địa chỉ");
    Date = prompt("Thời Gian");
    function createLetter(){
        return`
        <i>"${RecipienName} thương nhớ,<p>Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.<p>Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.</p><p>Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.</p><i/>
        ${Address}, ${Date}."`;
    }
    document.write(createLetter());
}


      const apiUrl = 'https://script.google.com/macros/s/AKfycbzNJPjd8kRfx6LfWJVNOQoL5QxDWEseehchaVphfIxv67fvBQc1z8AhwI_egLee/exec';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(async data => {
    const nameValue = String(data.content.name);
    console.log("Name:", nameValue);

    // Giả sử genloginSetVariable chỉ là một hàm đơn giản gán giá trị cho biến
    await genloginSetVariable('variableNameHere', nameValue);
    

  })
  .catch(error => {
    console.log('There was a problem with the fetch operation:', error.message);
  });

  function doGet(e) {
    return handleResponse(e);
}

var SHEET_NAME = "Sheet2";
var SCRIPT_PROP = PropertiesService.getScriptProperties();

function handleResponse(e) {
    var lock = LockService.getPublicLock();
    lock.waitLock(30000); 

    try {
        var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
        var sheet = doc.getSheetByName(SHEET_NAME);

        var currentRow = parseInt(SCRIPT_PROP.getProperty("currentRow") || 2);
        var value = String(sheet.getRange(currentRow, 1).getValue());  // Ép kiểu giá trị thành chuỗi

        if (!value) {
            return ContentService
                .createTextOutput(JSON.stringify({"result": "waiting", "message": "Chưa có dữ liệu, vui lòng thử lại sau."}))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Cập nhật chỉ số dòng cho lần gọi tiếp theo
        SCRIPT_PROP.setProperty("currentRow", currentRow + 1);

        var content = {
            "name": value
        };

        return ContentService
            .createTextOutput(JSON.stringify({"result": "success", "content": content}))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({"result": "error", "error": e.toString()}))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}

