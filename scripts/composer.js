import widgetFactory from './widgetFactory.js';

function getData() {
  return {
    "backgroundImageTheme": "architecture",
    "widgets": [
      {
        "name": "dayAndTime"
      }
    ]
  }
}

function composerFactory(document) {
  const wrapper = document.querySelector("body")

  function renderWidgets(widgets) {
    return widgets.map((widget) => {
      return widgetFactory().render(widget)
    }).join(" ", "")
  }

  function render(data) {
    wrapper.innerHTML = `
      <section
        class="wrapper"
        style="background-image: url('https://source.unsplash.com/featured/?${data.backgroundImageTheme}')">
        ${renderWidgets(data.widgets)}
      </section>
    `
  }

  return Object.freeze({ render })
}

composerFactory(document).render(getData())
