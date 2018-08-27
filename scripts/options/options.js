function setStorage(object) {
  chrome.storage.sync.set(object);
}

document.querySelector("form").addEventListener("change", event => {
  switch (event.target.name) {
    case "backgroundColor":
      setStorage({ background: "color" });
      document.getElementsByName("backgroundTheme")[0].checked = false;
      break;

    case "backgroundTheme":
      setStorage({ background: "theme" });
      document.getElementsByName("backgroundColor")[0].checked = false;
      break;

    case "inputColor":
      setStorage({ backgroundColor: event.target.value });
      break;

    case "inputTheme":
      setStorage({ backgroundTheme: event.target.value });
      break;

    default:
      break;
  }
});

function loadOptionsFromStorage() {
  const optionKeys = ["background", "backgroundColor", "backgroundTheme"];

  optionKeys.forEach(key => {
    try {
      chrome.storage.sync.get(key, state => {
        switch (key) {
          case "background":
            if (state[key] === "color") {
              document.getElementsByName("backgroundTheme")[0].checked = false;
              document.getElementsByName("backgroundColor")[0].checked = true;
            } else {
              document.getElementsByName("backgroundTheme")[0].checked = true;
              document.getElementsByName("backgroundColor")[0].checked = false;
            }
            break;

          case "backgroundColor":
            document.getElementsByName("inputColor")[0].value = state[key];
            break;

          case "backgroundTheme":
            document.getElementsByName("inputTheme")[0].value = state[key];
            break;

          default:
            break;
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
}

loadOptionsFromStorage();
