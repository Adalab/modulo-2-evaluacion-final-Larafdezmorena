'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const searchBtn = document.querySelector('.js__search-btn');
const favorites = document.querySelector('.js__favorites-list');
const charactersResultUl = document.querySelector('.js__character-list');


// VARIABLES GLOBALES
let charactersData = [];


// EVENTOS


//FUNCIONES

function renderOne(characterData) {
    charactersResultUl.innerHTML += `
    <li class="cards__list">
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

// CÓDIGO CUANDO CARGA LA PÁGINA

renderAll();

fetch ('//api.disneyapi.dev/character?pageSize=50')
.then( response => response.json())
.then( data => {
    console.log(data.data);

    charactersData = data.data;

    renderAll();
});


