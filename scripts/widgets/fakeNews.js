function populateHeadlines() {
  return new Promise((res) => { 
    setTimeout(() => { res('hahahahahahaha') }, 5000) 
  })
}

export default async function render() {
  const html = `
      <div>
        <ul id='headlines' >
          ${await populateHeadlines()}
        </ul >
      </div >
    `
  return html;
}
