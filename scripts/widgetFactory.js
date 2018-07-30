export default function widgetFactory() {
  function render({ name, component, data }) {
    return `
      <div class="widget">
        <h2>${name}</h2>
        ${component().render()}
      </div>
    `
  }

  return Object.freeze({ render })
}
