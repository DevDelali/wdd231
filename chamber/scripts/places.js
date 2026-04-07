import { places } from '../data/places.mjs';
console.log(places);

// create a card for the items in the places array and add them to the page
const placesContainer = document.getElementById('places-container');
places.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('place-card');
    card.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.photo_url}" alt="${place.name}">
        <p>${place.description}</p>
        <p><strong>Address:</strong> ${place.address}</p>
    `;
    placesContainer.appendChild(card);
})


