// Set the RSS feed URL
const rssFeedUrl = "https://stanforddaily.com/feed/";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

// Find the news ticker element
const ticker = document.getElementById("ticker");

var options = { weekday: 'long', month: 'long', day: 'numeric' };

// Parse the RSS feed using a third-party library such as RSS Parser
const parser = new RSSParser();
parser.parseURL(CORS_PROXY + rssFeedUrl, function(err, feed) {
  if (err) throw err;
  
  // Loop through the feed items and create li elements for each one
  for (let i = 0; i < feed.items.length; i++) {
    const item = feed.items[i];
    if (item.categories.includes("Crime & Safety")) {
        date = new Date(item.pubDate)
        console.log(date)
        date_string = date.toLocaleDateString("en-US", options)
        month = date.getMonth()+1
        const li = document.createElement("li");
        li.textContent = "[" + date_string + "] " + item.title;
        ticker.appendChild(li);
    }
  }
});