import { config } from "./config.js";
const apiKey = config.apiKey;
const movielist = document.getElementById("movie-list");
document
  .getElementById("search-btn")
  .addEventListener("click", async function () {
    const query = document.getElementById("search-input").value;
    if (query) {
      await fetchMovies(query);
      document.getElementById("search-input").value = "";
    }
    else if(query==""){
        document.getElementById('movie-list').innerText="Please Enter Something"
    }else{
        document.getElementById('movie-list').innerText="Not Found"
    }
  });

async function fetchMovies(query) {
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
    query
  )}&apikey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
      } else {
        document.getElementById(
          "movie-list"
        ).innerHTML = `<p class="error">${data.Error}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching the movies:", error);
    });
}
async function displayMovies(data) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear any previous results
  
    // Create an array of promises to handle asynchronous operations
    const moviePromises = data.map(async (element) => {
      const imdbData = await fetchImdbRating(element.imdbID);
      const imdbRating = imdbData?.imdbRating || "N/A"; // Use N/A if imdbRating is not available
  
      // Generate the IMDb URL using the imdbID
      const imdbUrl = `https://www.imdb.com/title/${element.imdbID}/`;
  
      // Create the movie item HTML with a link to IMDb
      return `
        <div class="movie-item">
          <a href="${imdbUrl}" target="_blank">
            <img 
              src="${element.Poster !== "N/A" ? element.Poster : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}" 
              alt="${element.Title} Poster" 
              class="poster" 
            />
          </a>
          <div class="movie-info">
            <a href="${imdbUrl}" target="_blank">
              <h3>${element.Title}</h3>
              <h2>${element.Type}</h2>
            </a>
            <p>Year: ${element.Year}</p>
            <div class="rating">
              <i class="fa fa-star"></i>
              <span>${imdbRating}</span>
            </div>
          </div>
        </div>
      `;
    });
  
    // Wait for all movie promises to resolve
    const movieHTMLArray = await Promise.all(moviePromises);
  
    // Set the innerHTML of movieList to the combined movie items
    movieList.innerHTML = movieHTMLArray.join('');
  }
  

async function fetchImdbRating(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      return data;
    } else {
      console.error("Error fetching movie data:", data.Error);
      return null; // Or handle the error as needed
    }
  } catch (error) {
    console.error("Network error:", error);
    return null; // Or handle the error as needed
  }
}
