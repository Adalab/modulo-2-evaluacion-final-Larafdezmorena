'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const searchBtn = document.querySelector('.js__search-btn');
const favorites = document.querySelector('.js__favorites-list');
const charactersResultUl = document.querySelector('.js__character-list');


// VARIABLES GLOBALES
let disneyCharacters = [];
//let disneyFavorites = JSON.parse(localStorage.getItem("disneyFavorites")) || [];


// CÓDIGO CUANDO INICIA LA PÁGINA

//se deben de mostrar los personajes

//window.addEventListener('load', (event) =>{
//ev.preventDefault()
//});

// EVENTOS



// evento para buscar personajes al rellenar el input y click en el button


//FUNCIONES

function renderOne(characterData) {
    charactersResultUl.innerHTML += `
    <li class="cards__list">
        <h3>${characterData.name}</h3>
        <img src="${characterData.imageUrl}"/>
        </li>
    `;
}

// CÓDIGO CUANDO CARGA LA PÁGINA

renderOne( {
    "_id": 112,
    "films": [
    "Hercules (film)"
    ],
    "shortFilms": [],
    "tvShows": [
    "Hercules (TV series)"
    ],
    "videoGames": [
    "Kingdom Hearts III"
    ],
    "parkAttractions": [],
    "allies": [],
    "enemies": [],
    "sourceUrl": "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    "name": "Achilles",
    "imageUrl": "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
    "createdAt": "2021-04-12T01:31:30.547Z",
    "updatedAt": "2021-12-20T20:39:18.033Z",
    "url": "https://api.disneyapi.dev/characters/112",
    "__v": 0
    },

);

