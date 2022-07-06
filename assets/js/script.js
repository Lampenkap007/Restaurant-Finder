"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    loadRestaurants();
}

async function loadRestaurants() {
    const restaurants = await (await fetch("./assets/data/restaurants.json")).json();
    const $restaurantContainer = document.querySelector(".containerList");
    restaurants.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        $restaurantContainer.insertAdjacentHTML("beforeend", restaurantCard);
    });
}

function createRestaurantCard(restaurant) {
    return `
        <div class="restaurantCard">
            <img class="${restaurant.img}" alt="Image of ${restaurant.name}">
            <h2 class="restaurantTitle">${restaurant.name}</h2>
            <p class="restaurantDescription">${restaurant.description}</p>
            <ul class="uspList">
                <li class="uspItem">${restaurant.type}</li>
                <li>|</li>
                <li class="uspItem">${restaurant.priceRange}</li>
            </ul>
        </div>
    `
}
