import { NEWS_API_KEY } from '../secrets.js';
import renderWidget from './widgetFactory.js';

import dayAndTime from './widgets/dayAndTime.js';
import news from './widgets/news.js';
import fakeNews from './widgets/fakeNews.js';
import weather from './widgets/weather.js';

function getPreferences() {
  return {
    "backgroundImageTheme": "space",
    "widgets": [
      {
        name: "weather",
        data: "",
        component: weather(),
      },      
      {
        name: "Date",
        data: "",
        component: dayAndTime,
      },
      {
        name: "News",
        data: "",
        component: news(NEWS_API_KEY),
      },
    ]
  }
}

const wrapper = document.querySelector("body")

function renderWidgets(widgets) {
  return Promise.all(widgets.map(async widget => {
    return await renderWidget(widget)
  }))
}

async function render(data) {
  console.log(data);
  wrapper.innerHTML = `
    <section
      class="wrapper"
      style="background-image: url('https://source.unsplash.com/featured/?${data.backgroundImageTheme}')">
      ${await renderWidgets(data.widgets)}
    </section>
  `
}

render(getPreferences())
