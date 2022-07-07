"use strict";

document.addEventListener("DOMContentLoaded", init);

async function init() {
    await loadRestaurants();
    document.querySelector("#type").addEventListener("change", filterRestaurants);
    document.querySelector("#price").addEventListener("change", filterRestaurants);
    document.querySelectorAll(".restaurantCard").forEach(restaurantCard => restaurantCard.addEventListener("click", openRestaurantWebsite));
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
        <div class="restaurantCard" data-type="${restaurant.type}" data-price="${restaurant.priceRange}" data-website="${restaurant.website}">
            <img class="restaurantImg" src="${restaurant.img}" alt="Image of ${restaurant.name}">
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

function filterRestaurants(evt) {
    document.querySelectorAll(".restaurantCard").forEach(restaurantCard => {
        const $selectedType = document.querySelector("#type").value;
        const $selectedPrice = document.querySelector("#price").value;
        const $type = restaurantCard.dataset.type;
        const $price = restaurantCard.dataset.price;
        const matchingType = $selectedType === "None" || $selectedType === $type;
        const matchingPrice = $selectedPrice === "None" || $selectedPrice === $price;
        if (matchingType && matchingPrice) {
            restaurantCard.classList.remove("hidden");
        } else {
            restaurantCard.classList.add("hidden");
        }
    });
}

function openRestaurantWebsite(evt) {
    const restaurantCard = evt.currentTarget;
    const website = restaurantCard.dataset.website;
    window.location.href = website;
}
