var index = 0,
  timeoutID,
  tapClicker = () => {
    if (timeoutID) clearTimeout(timeoutID);
    var buttonTap = document.querySelector(".user-tap-button.button");
    var intervalTime = 7;
    if (buttonTap)
      buttonTap.dispatchEvent(
        new PointerEvent("pointerup", {
          bubbles: true,
          cancelable: true,
          pointerType: "mouse",
        })
      );
    timeoutID = setTimeout(tapClicker, intervalTime);
  };
tapClicker();
const xpath = '//div[@class="user-tap-energy"]/p';
const regex = /(\d+) \/ \d+/;
function getText() {
  try {
    const element = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    if (!element) return;
    const match = element.textContent.trim().match(regex);
    return match ? parseInt(match[1]) : undefined;
  } catch (error) {
    return undefined;
  }
}
function tapClicker() {
  const extractedNumber = getText();
  if (extractedNumber >= 20) {
    const buttonTap = document.querySelector(".user-tap-button.button");
    const intervalTime = 100;
    if (buttonTap) {
      buttonTap.dispatchEvent(
        new PointerEvent("pointerup", {
          bubbles: true,
          cancelable: true,
          pointerType: "mouse",
        })
      );
    }

    setTimeout(tapClicker, intervalTime);
  }
}
tapClicker();


