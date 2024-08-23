const apiKey = 'da7f6389f6e17d21e16eafa17c278616';  // Substitua pela sua chave API do TMDb
const apiUrl = 'https://api.themoviedb.org/3/search/movie';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const movieList = document.getElementById('movie-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const query = input.value;
    if (query) {
        searchMovies(query);
    }
});

function searchMovies(query) {
    const url = `${apiUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching the movies:', error);
        });
}

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.classList.add('movie-item');

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.classList.add('movie-overview');
        movieOverview.textContent = movie.overview;

        movieItem.appendChild(movieTitle);
        movieItem.appendChild(movieOverview);

        movieList.appendChild(movieItem);
    });
}
