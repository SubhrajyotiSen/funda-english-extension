chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) {
    return;
  }

  const url = new URL(details.url);
  
  if (url.hostname !== 'www.funda.nl') {
    return;
  }

  if (url.pathname.startsWith('/en') || url.pathname.startsWith('/en/')) {
    return;
  }

  let newPath = '/en';
  if (url.pathname !== '/' && url.pathname !== '') {
    newPath = '/en' + (url.pathname.startsWith('/') ? url.pathname : '/' + url.pathname);
  }
  
  const newUrl = url.origin + newPath + url.search + url.hash;
  
  chrome.tabs.update(details.tabId, {
    url: newUrl
  });
}, {
  url: [{
    urlPrefix: 'https://www.funda.nl/'
  }]
});