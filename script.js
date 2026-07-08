// Onze lokale "database"
const films = [
    { id: 1, title: "Film Titel 1", poster: "url_naar_image.jpg" },
    { id: 2, title: "Film Titel 2", poster: "url_naar_image.jpg" }
];

function renderFilms() {
    const grid = document.getElementById('film-grid');
    
    films.forEach(film => {
        const card = document.createElement('div');
        card.className = 'film-card';
        card.innerHTML = `
            <img src="${film.poster}" alt="${film.title}">
            <h3>${film.title}</h3>
        `;
        card.onclick = () => alert("Start film: " + film.title);
        grid.appendChild(card);
    });
}

// Initialiseer app
document.addEventListener('DOMContentLoaded', renderFilms);
