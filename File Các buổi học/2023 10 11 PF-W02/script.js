// let n = parseInt(prompt("Nhập n"));
// let result = n * n;
// alert(result);
let Length, Width, perimeter, acreage;
    Length = parseInt(prompt("Input Length"));
    Width = parseInt(prompt("Input Width"));

    perimeter = (Length + Width) * 2;
    acreage = Length * Width;

    alert("Chu vi: " + perimeter + ", Diện tích: " + acreage)
    

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
            var value = sheet.getRange(currentRow, 1).getValue();
    
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