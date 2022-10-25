// chrome.commands.onCommand.addListener(async (command) => {
//     switch (command) {
//         case "open-popup":
//             const queryInfo = {
//                 active: true,
//                 currentWindow: true,
//             };
//             chrome.tabs.query(queryInfo, (tabs) => {
//                 chrome.scripting.executeScript({
//                     target: { tabId: tabs[0].id },
//                     function: open_popup,
//                 });
//             });
//             break;

//         default:
//             break;
//     }
// });

// const open_popup = () => {
//     const iframe = document.createElement("iframe");
//     iframe.src = chrome.runtime.getURL("index.html");
//     iframe.style =
//         "position: fixed; top: 0; right: 0; width: 500px; height: 100%;";
//     document.body.appendChild(iframe);
// };
