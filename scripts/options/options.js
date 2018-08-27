function readStorage(key) {
  chrome.storage.sync.get(key, state => console.log(state));
}

function setStorage(object) {
  chrome.storage.sync.set(object);
  readStorage(Object.keys(object)[0]);
}

document.querySelector("form").addEventListener("change", event => {
  switch (event.target.name) {
    case "background-color":
      setStorage({ background: "color" });
      document.getElementsByName("background-theme")[0].checked = false;
      break;

    case "background-theme":
      setStorage({ background: "theme" });
      document.getElementsByName("background-color")[0].checked = false;
      break;

    case "input-color":
      setStorage({ backgroundColor: event.target.value });
      break;

    case "input-theme":
      setStorage({ backgroundTheme: event.target.value });
      break;

    default:
      break;
  }
});
