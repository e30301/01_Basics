const feeds = [
  { url: `https://corsproxy.io/?${encodeURIComponent('https://htl-dornbirn.webuntis.com/WebUntis/NewsFeed.do?school=htl-dornbirn')}`, label: 'HTL Dornbirn' }
];

const ITEMS_PER_FEED = 10;

async function fetchFeed(url) {
  const res = await fetch(url);
  const text = await res.text();
  return new DOMParser().parseFromString(text, "text/xml");
}

function parseFeed(doc) {
  return [...doc.querySelectorAll("item")].slice(0, ITEMS_PER_FEED).map(item => ({
    title: item.querySelector("title")?.textContent ?? "(No title)",
    link: item.querySelector("link")?.textContent ?? "#",
    description: item.querySelector("description")?.textContent ?? "",
    date: new Date(item.querySelector("pubDate")?.textContent ?? 0)
  }));
}

function formatDate(date) {
  return date.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" });
}

(async () => {
  const box = document.getElementById("feed-box");
  box.innerHTML = `<p style="color:#888;font-size:13px;">Loading...</p>`;

  const allItems = [];
  for (const { url, label } of feeds) {
    try {
      const doc = await fetchFeed(url);
      const items = parseFeed(doc).map(item => ({ ...item, source: label }));
      allItems.push(...items);
    } catch (err) {
      console.error(`Error parsing ${url}:`, err);
    }
  }

  allItems.sort((a, b) => b.date - a.date);


  box.innerHTML = allItems.map(item => `
    <div class="feed-item">
      <div class="feed-item-header">
        <span class="feed-item-date">${formatDate(item.date)}</span>
      </div>
      <h3 class="feed-item-title">${item.title}</h3>
      <div class="feed-item-desc">${item.description}</div>
    </div>
  `).join("");
})();