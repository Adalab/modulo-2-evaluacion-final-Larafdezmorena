'use strict';

// QUERY-SELECTOR
const searchInput = document.querySelector('.js__input');
const form = document.querySelector('.js__form');
const favoritesUl = document.querySelector('.js__favoritesUl');
const charactersResultUl = document.querySelector('.js__character-list');


// VARIABLES DE DATOS

let charactersData = [];  


//FUNCIONES

function renderOne(characterData) {
    const imageUrl = characterData.imageUrl ? characterData.imageUrl : "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

    charactersResultUl.innerHTML += `
        <li class="cards__list js__characters-li" data-id="${characterData._id}">
        
            <img class="img__card" src="${imageUrl}"/>    
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
    const clickedLi = event.currentTarget;

    clickedLi.classList.toggle('favorites');

    const selectedCharacterId = parseInt(clickedLi.dataset.id);

    // Verificar si el personaje ya está en la lista de favoritos
    const isAlreadyInFavorites = favoritesUl.querySelector(`[data-id="${selectedCharacterId}"]`);

    if (!isAlreadyInFavorites) {
        const selectedCharacterOb = charactersData.find(oneCharacter => {
            return oneCharacter._id === selectedCharacterId;
        });

        if (selectedCharacterOb) {
            
            const imageUrl = selectedCharacterOb.imageUrl ? selectedCharacterOb.imageUrl : "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

            favoritesUl.innerHTML += `
                <li class="cards__favs js__characters-li" data-id="${selectedCharacterId}">
                    <img class="img__card" src="${imageUrl}"/>    
                    <h3 class="name__favs">${selectedCharacterOb.name}</h3>
                    <span class="delete__icon js__delete-icon"><i class="fa-solid fa-trash"></i></span> 
                </li>
            `;
        }
    }
}



// EVENTOS

form.addEventListener('submit', (event)=> {

    event.preventDefault();
    fetch(`//api.disneyapi.dev/character?name=${searchInput.value}`)
        .then(response => response.json())
        .then(data=> {
            charactersData = data.data;
            renderAll();
        })
        .catch(error => console.error('Error al obtener datos:', error));
}) ;


// CÓDIGO CUANDO CARGA LA PÁGINA

renderAll();


const charactersInLS = JSON.parse( localStorage.getItem('disneyCharacters'));

if (charactersInLS === null) {
   
    fetch (`//api.disneyapi.dev/character?pageSize=50`)
    .then( response => response.json())
    .then( data => {
        charactersData = data.data;
        console.log(`llegan los datos`);
        localStorage.setItem('disneyCharacters', JSON.stringify(charactersData));

        renderAll();
    });
    
}
else {
    charactersData = charactersInLS;
    renderAll();
}


      
