function consoleLogStorage(key) {
  chrome.storage.sync.get(key, state => console.log(state));
}

function setStorage(object) {
  chrome.storage.sync.set(object);
  consoleLogStorage(Object.keys(object)[0]);
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

function setOption(params) {
}

function loadOptionsFromStorage() {
  const optionKeys = ["background", "backgroundColor", "backgroundTheme"]

  optionKeys.forEach(key => {
    try {
      // console.log(key);
      chrome.storage.sync.get(key, state => {
        // console.log(state[key]);
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
            document.getElementsByName("inputColor")[0].value = state[key]
            break;
            
          case "backgroundTheme":
            document.getElementsByName("inputTheme")[0].value = state[key]
            break;
        
          default:
            break;
        }
        
      });
    } catch {

    }
  })
}

loadOptionsFromStorage()
