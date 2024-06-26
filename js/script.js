
const movieSearchBox = document.getElementById('movie-search-box');// Arama kutusu için bir referans alır
const searchList = document.getElementById('search-list'); // Arama sonuçlarının listelendiği div için bir referans alır
const resultGrid = document.getElementById('result-grid'); // Film detaylarının görüntülendiği div için bir referans alır


async function loadMovies(searchTerm){
    // Belirli bir arama terimi için film listesini yükler
    // API'ye istek yapar ve sonuçları alır
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
   
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
    // Kullanıcı tarafından girilen arama terimini alır ve film listesini yükler
    
    // Arama teriminin uzunluğunu kontrol eder ve uygun işlemleri gerçekleştirir
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies){
    // Film listesini görüntüler
    // API'den alınan film listesini görüntüler
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; 
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    // Her bir film öğesine tıklanıldığında film detaylarını yükler
   

    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=95ee047`);
            const movieDetails = await result.json();
          
            displayMovieDetails(movieDetails);
        });
    });
}

function displayMovieDetails(details){
    // Film detaylarını görüntüler
   
    resultGrid.innerHTML = `
    <div class = "movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}


window.addEventListener('click', (event) => {
    // Sayfa üzerinde herhangi bir yere tıklandığında arama sonuçlarını gizler
  

    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});