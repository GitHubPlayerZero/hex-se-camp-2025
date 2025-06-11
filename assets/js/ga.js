/**
 * 執行 GA 追蹤：連結。
 * 會阻止預設的連結跳轉動作，改成使用 GA 的 callback 參數執行頁面的跳轉，以確保 GA 事件有足夠的時間發送出去。
 * @param {Event} event event。
 * @param {string} url 要跳轉的頁面連結。
 * @param {string} category GA category 名稱。
 * @param {string} label GA label 名稱。
 */
function trackGaLinkClick (event, url, category, label) {
  event.preventDefault();

  if (!(url && category && label)) {
    throw Error("參數 [url], [category], [label] 均須輸入！");
  }

  gtag('event', 'link_click', {
    'event_category': category,
    'event_label': label,
    'event_callback': () => {
      window.location.href = url;
    }
  });
}

/**
 * 執行 GA 追蹤：按鈕。
 * @param {string} category GA category 名稱。
 * @param {string} label GA label 名稱。
 */
function trackGaBtnClick (category, label) {
  if (!(category && label)) {
    throw Error("參數 [category], [label] 均須輸入！");
  }
  
  gtag('event', 'button_click', {
    'event_category': category,
    'event_label': label
  });
}
