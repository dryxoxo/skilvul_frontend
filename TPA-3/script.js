import { loadMovie } from "./lib/getData.js";
import { emptyCard } from "./utils/cardEmpty.js";

(async function(){
    let listFilm = document.getElementById('listMovie')
    const movies = await loadMovie('')
    console.log(movies);
    movies.results.forEach(element => {
        listFilm.innerHTML += emptyCard(element.title, element.poster_path, element.release_date, element.vote_average)
    });
})();

const submitSearch = document.getElementById('submitSearch')

submitSearch.addEventListener('click', async (event) => {
    event.preventDefault()

    const query = document.getElementById('search').value
    let listFilm = document.getElementById('listMovie')

    listFilm.innerHTML = ''
    const movies = await loadMovie(query)
    movies.results.forEach(element => {
        listFilm.innerHTML += emptyCard(element.title, element.poster_path, element.release_date, element.vote_average)
    })
})