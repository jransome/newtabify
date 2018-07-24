import dayAndTime from './dayAndTime.js';

export default function widgetFactory() {
  function render({ name, component, data }) {
    return `
      <div class="widget__1">
        <h2>${name}</h2>
        ${component.render()}
      </div>
    `
  }

  return Object.freeze({ render })
}
