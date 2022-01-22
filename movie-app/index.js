const API_URL = "https://api.wmdb.tv/api/v1/movie/search?q=";
const TOP_URL =
  "https://api.wmdb.tv/api/v1/top?type=Douban&skip=0&limit=50&lang=Cn";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovie(TOP_URL);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { doubanRating, data } = movie;
    const movieInfo = data[0];
    const { poster, name, description, country, genre, language } = movieInfo;

    const moiveEl = document.createElement("div");
    moiveEl.classList.add("movie");

    moiveEl.innerHTML = `
      <img src="${poster}" alt="${name}" />
      <div class="movie-info">
        <h3>${name}</h3>
        <span class="${getClassByRate(doubanRating)}">${doubanRating}</span>
      </div>
      <div class="overview">
        <h3>概述</h3>
        <p><span>发行地区：</span><span>${country}</span></p>
        <p><span>分类标签：</span><span>${genre}</span></p>
        <p><span>语言：</span><span>${language}</span></p>
        <p><span>情节：</span><span>${description}</span></p>
      </div>
    `;
    main.appendChild(moiveEl);
  });
}

function getClassByRate(rate) {
  if (rate >= 8) {
    return "green";
  } else if (rate >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovie(API_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
