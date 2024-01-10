'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const searchBtn = document.querySelector('.js__search-btn');
const favorites = document.querySelector('.js__favorites-list');
const charactersResultUl = document.querySelector('.js__character-list');






// VARIABLES GLOBALES
let charactersData = [];


//FUNCIONES

function renderOne(characterData) {
    charactersResultUl.innerHTML += `
    <li class="cards__list js__characters-li">
        <h3>${characterData.name}</h3>
        <img src="${characterData.imageUrl}"/>
        </li>
    `;
}

function renderAll () { 
    for ( const eachCharacter of charactersData ) {
        renderOne ( eachCharacter );
    }
}

const allCharactersLi = document.querySelectorAll('.js__characters-li');

for( const characterLi of allCharactersLi) {
    characterLi.addEventListener('click', handleClickResult);
}

// FUNCIONES DE EVENTOS (HANDLER)

function handleClickResult(event) {
    const clickedLi = event.currentTarget;
    clickedLi.classList.toggle('favorites')
}

// EVENTOS
// CÓDIGO CUANDO CARGA LA PÁGINA

renderAll();

fetch ('//api.disneyapi.dev/character?pageSize=50')
.then( response => response.json())
.then( data => {
    console.log(data.data);

    charactersData = data.data;

    renderAll();
});


