const sources = ['bbc-news', 'reuters', 'the-guardian-uk', 'techradar'];
const newsUrl = `https://newsapi.org/v2/top-headlines?sources=${sources.join(',')}&apiKey=`;

async function getHeadlines(url) {
  const response = await fetch(url);
  const responseObject = await response.json();
  return responseObject.articles;
};

function createHeadlineElement(article) {
  return `
    <a href="${article.url}" class="headline">${article.title}</a>
  `
}

async function populateHeadlines(key) {
  const url = newsUrl + key
  const articles = await getHeadlines(url);
  return articles.map(article =>
    createHeadlineElement(article)
  ).join('<br>');
}

export default key => async function render() {
  const html = `
      <div>
        <ul id='headlines' >
          ${await populateHeadlines(key)}
        </ul >
      </div >
    `
  return html;
}
