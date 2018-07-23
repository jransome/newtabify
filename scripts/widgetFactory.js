import dayAndTime from './dayAndTime.js';

export default function widgetFactory() {
  function render(widget) {
    return `
      <div class="widget__1">
        <h2>${widget.name}</h2>
        ${dayAndTime().render()}
      </div>
    `
  }

  return Object.freeze({ render })
}
