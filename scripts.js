document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            title: 'Global Economy in 2024',
            content: 'An analysis of the current trends affecting the global economy...',
        },
        {
            title: 'Climate Change and Its Impact',
            content: 'A look at how climate change is impacting different regions around the world...',
        },
        {
            title: 'Technological Advances in Healthcare',
            content: 'New technologies are revolutionizing the healthcare industry...',
        },
    ];

    const articleList = document.querySelector('.article-list');

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        articleList.appendChild(articleElement);
    });
});
