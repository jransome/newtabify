(async () => {
  const sources = "?sources=" +
    "bbc-news," +
    "reuters," +
    "the-guardian-uk," +
    "techradar";
  const newsUrl = `https://newsapi.org/v2/top-headlines${sources}&apiKey=${NEWS_API_KEY}`;
  
  const getHeadlines = async (url) => {
    const response = await fetch(url);
    const responseObject = await response.json();
    return responseObject.articles;
  };

  const createHeadlineElement = (headlinesList, article) => {
    const headline = document.createElement('a');
    headline.textContent = article.title;
    headline.href = article.url;
    headline.className = 'headline';
    headlinesList.appendChild(headline);
  }

  const populateHeadlines = (headlinesList, articles) => {
    articles.forEach(article => {
      createHeadlineElement(headlinesList, article)
    });
  }

  const renderNewsWidget = (container, articles) => {
    const headlinesList = document.createElement('ul');
    headlinesList.id = 'headlines';
    container.appendChild(headlinesList);

    populateHeadlines(headlinesList, articles);
  }

  try {
    const newsElement = document.querySelector('#news');
    const articles = await getHeadlines(newsUrl);
    renderNewsWidget(newsElement, articles);
  } catch (e) {
    console.error(e)
  }
})();
