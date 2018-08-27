export default async function render({ name, component }) {
  return `
      <div class="widget">
        <h2>${name}</h2>
        ${await component()}
      </div>
    `
}
