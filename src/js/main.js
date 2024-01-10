'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const form = document.querySelector('.js__form');
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
    charactersResultUl.innerHTML = '';
    
    for ( const eachCharacter of charactersData ) {
        renderOne ( eachCharacter );
    }

    const allCharactersLi = document.querySelectorAll('.js__characters-li');

    for( const characterLi of allCharactersLi) {
    characterLi.addEventListener('click', handleClickResult);
    }
}

// FUNCIONES DE EVENTOS (HANDLER)

function handleClickResult(event) {
    console.log('click');
    const clickedLi = event.currentTarget;
    
    clickedLi.classList.toggle('favorites');

    clickedLi.dataset.id;

    const selectedCharacterOb = charactersData.find( oneCharacter => oneCharacter._id === parseIntclickedLi.dataset.id );
    
    if (selectedCharacterOb) {
        const imageUrl = selectedCharacterOb.imageUrl || "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
    
        favoritesUl.innerHTML += `
            <li class="cards__list js__characters-li">
        
                <img class="img__card" src="${selectedCharacterOb.imageUrl}"/>    
                <h3 class="name">${selectedCharacterOb.name}</h3>
    
            </li>
        `;
    }
}

function createFav (character) {

    const cardFav = document.createElement('div');

    cardFav.classList.add('cardFav', 'js_card');

    cardFav.setAttribute('id', charactersData.id);


}



// EVENTOS

form.addEventListener('submit', (event)=> {

    event.preventDefault();
    fetch(`//api.disneyapi.dev/character?name=${searchInput.value}`)
        .then(response => response.json())
        .then(data=> {
            charactersData = data.character;

            renderAll();
    })
    .catch(error => console.error('Error al obtener datos:', error));
}) ; 
   



// CÓDIGO CUANDO CARGA LA PÁGINA

renderAll();

fetch (`//api.disneyapi.dev/character?pageSize=50`)
    .then( response => response.json())
    .then( data => {


        charactersData = data.data;

        renderAll();
});


