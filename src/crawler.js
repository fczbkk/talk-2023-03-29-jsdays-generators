async function getUrlLinks (url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const hrefs = html.match(/href="([^"]*)"/g);
    return hrefs
      ? hrefs.map((link) => link.slice(6, -1))
      : [];
  } catch {
    return [];
  }
}

async function * crawl (startUrl, maxDepth = 3, maxPages = 100) {
  const visited = new Set();
  const queue = [{ url: startUrl, depth: 0 }];
  let pageCount = 0;

  while (queue.length && pageCount < maxPages) {
    const { url, depth } = queue.shift();

    if (!visited.has(url) && depth < maxDepth) {
      visited.add(url);
      pageCount++;

      yield url;

      const links = await getUrlLinks(url);
      for (const link of links) {
        queue.push({ url: link, depth: depth + 1 });
      }
    }
  }
}

// Usage example
(async () => {
  const fczbkkCrawler = crawl('https://fczbkk.com');
  for await (const url of fczbkkCrawler) {
    console.log(url);
  }
})();

