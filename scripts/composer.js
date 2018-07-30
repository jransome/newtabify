import widgetFactory from './widgetFactory.js';
import dayAndTime from './dayAndTime.js';

function getData() {
  return {
    "backgroundImageTheme": "cars",
    "widgets": [
      {
        name: "dayAndTime",
        data: "",
        component: dayAndTime,
      },
    ]
  }
}

function composer(document) {
  const wrapper = document.querySelector("body")

  function renderWidgets(widgets) {
    return widgets.map((widget) => {
      console.log(widget)
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

composer(document).render(getData())
