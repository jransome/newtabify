const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

let date = new Date();

export default function render() {
  return `
      <div>
        ${date.toLocaleDateString('en-GB', dateOptions)}
      </div>
    `
}
