chrome.commands.onCommand.addListener(async (command) => {
  switch (command) {
    case "open-popup":
      const queryInfo = {
        active: true,
        currentWindow: true,
      };
      chrome.tabs.query(queryInfo, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: open_popup,
        });
      });
      break;

    default:
      break;
  }
});

const open_popup = () => {
  const iframe = document.createElement("div");
  iframe.src = chrome.runtime.getURL("index.html");
  iframe.style =
    "position: fixed; top: 50%; left: 50%; width: 800px; height: 100%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background: transparent;";
  document.body.appendChild(iframe);
};
