'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const searchBtn = document.querySelector('.js__search-btn');
const favorites = document.querySelector('.js__favorites-list');
const character = document.querySelector('.js__character-list');


// VARIABLES GLOBALES
let disneyCharacters = [];
//let disneyFavorites = JSON.parse(localStorage.getItem("disneyFavorites")) || [];


// CÓDIGO CUANDO INICIA LA PÁGINA

//se deben de mostrar los personajes

//window.addEventListener('load', (event) =>{
//ev.preventDefault()
//});

// EVENTOS

searchBtn.addEventListener('click', handleClickSearch);

// evento para buscar personajes al rellenar el input y click en el button


//FUNCIONES

character.innerHTML += "";

/**
 * Genera y pone un li en el ul de la página
 * @param {*} oneCharacterData Es un objeto con los datros del personaje a pintar
 */

function renderCharacter (CharacterData) {
    const imageUrl = CharacterData.imageUrl || "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
    const favoriteCharacterIndex = favoriteData.findIndex(
        (oneFavorite) => oneFavorite._id === parseInt(CharacterData._id)
    );

    if (favoritesCharacterIndex === -1) {
        character.innerHTML += 
            `<li class="card js__charactersLi" data-id="${CharacterData._id}">
               <img class="img_card" src="${imageUrl}" alt="${CharacterData.name}">
               <h3 class="title_card">${CharacterData.name}</h3>
           </li>
         `;
      } else {
        charactersResultUl.innerHTML += 
        `<li class="characterCard favorites js__charactersLi" data-id="${CharacterData._id}">
            <img class="img_card" src="${imageUrl}" alt="${CharacterData.name}">
            <h3 class="title_card">${CharacterData.name}</h3>
        </li>`;
}};

renderCharacter ();

function renderAllCharacters(){
    character.innerHTML = '';

    for( const character of disneyCharacters) {
        character.innerHTML += `
    <li class="card" id="${characterData._id}">
        <img class="img_card" src="${characterData.imageUrl}" alt="Foto de ${characterData.name}">
        <h3 class="title_card">${character.name}</h3>
    </li>`;
}};

renderAllCharacters();


function handleClickSearch(event) {
    event.preventDefault();

    fetch('//api.disneyapi.dev/character?name=${searchInput.value}')
    .then(response => response.json())
    .then(data => {
        //ira el codigo que guarde los datos (data) en nuestras variables

    disneyCharacters = data.results;
    
    renderAllCharacters();
    
});    
}

// EVENTOS

searchBtn.addEventListener('click', handleClickSearch);

// evento para buscar personajes al rellenar el input y click el button
// searchBtn.addEventListener('click', function(){

//});

// FUNCIONES

// funcion para añadir un buble que genere HTML de cada personaje desde el API



//const renderCard = (name, image) => {
  //  listUl.innerHTML += `
    //<li class="card">
      //  <img ${image} alt="Foto de ${name}">
        //<h3>${name}</h3>
    //</li>`;
//};

// funcion para pintar personajes
// funcion para buscar personajes
// funcion para buscar personajes


// LOCAL STORAGE

// CÓDIGO CUANDO INICIA LA PÁGINA

fetch('//api.disneyapi.dev/character?pageSize=50')
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    disneyCharacters = data.data;
    
    renderAllCharacters();
    
});