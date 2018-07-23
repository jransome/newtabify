
export default function dayAndTime() {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  let date = new Date();
  
  function render() {
    return `
      <div>
        ${date.toLocaleDateString('en-GB', dateOptions)}
      </div>
    `
  }

  return Object.freeze({ render })
}
