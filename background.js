chrome.runtime.onMessage.addListener(() => {
  chrome.tabs.create({
    'url': 'http://localhost:3000'
  }, (tab) => {
    chrome.tabs.executeScript({
      file: 'test.js',
      runAt: 'document_idle'
    });
  });
});