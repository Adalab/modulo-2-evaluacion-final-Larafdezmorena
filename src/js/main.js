'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const searchBtn = document.querySelector('.js__search-btn');
const favoritesUl = document.querySelector('.js__favoritesUl');
const charactersResultUl = document.querySelector('.js__character-list');






// VARIABLES DE DATOS

let charactersData = [];
let favoritesData =[];


//FUNCIONES

function renderOne(characterData) {
    charactersResultUl.innerHTML += `
    <li class="cards__list js__characters-li" data-id="${characterData.id}">
        
        <img class="img__card" src="${characterData.imageUrl}"/>    
        <h3 class="name">${characterData.name}</h3>
        
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
    console.log('click');
    
    const clickedLi = event.currentTarget;
    
    clickedLi.classList.toggle('favorites');

    clickedLi.dataset.id;

    const selectedCharacterOb = charactersData.find( oneCharacter => oneCharacter.id === clickedLi.dataset.id );

    favoritesUl.innerHTML += `
    <li class="cards__list js__characters-li">
        
        <img class="img__card" src="${selectedCharacterOb.imageUrl}"/>    
        <h3 class="name">${selectedCharacterOb.name}</h3>
    
    </li>
`;
}



// EVENTOS
// CÓDIGO CUANDO CARGA LA PÁGINA

renderAll();

fetch ('//api.disneyapi.dev/character?pageSize=50')
.then( response => response.json())
.then( data => {


    charactersData = data.data;

    renderAll();
});


