const movies = [
    { title: "Inception", category: "trending" },
    { title: "Batman", category: "trending" },
    { title: "Fast & Furious", category: "action" }
];

function initHome() {
    const trendingGrid = document.getElementById('trending-grid');
    const actionGrid = document.getElementById('action-grid');

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'film-card';
        card.innerHTML = `<div class="card-content">${movie.title}</div>`;
        
        if (movie.category === 'trending') trendingGrid.appendChild(card);
        else actionGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initHome);
