async function updateHackerNews() {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
        const storyIds = await response.json();
        const storiesContainer = document.querySelector('.hn-stories');
        
        // Get the first 20 stories
        const stories = await Promise.all(
            storyIds.slice(0, 20).map(async (id) => {
                const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                return storyResponse.json();
            })
        );

        // Update the DOM with new stories
        storiesContainer.innerHTML = stories
            .filter(story => story && story.url) // Only stories with URLs
            .map(story => `
                <li class="hn-story">
                    <a href="${story.url}" target="_blank">${story.title}</a>
                </li>
            `).join('');
    } catch (error) {
        console.error('Error fetching Hacker News:', error);
    }
}

// Update immediately and then every 5 minutes
updateHackerNews();
setInterval(updateHackerNews, 5 * 60 * 1000);