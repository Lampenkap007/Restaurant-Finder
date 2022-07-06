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
function ApplyFilter() {
   console.log(document.querySelectorAll("#restaurant"))

   var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("typeInput");
    filter = input.value;
    ul = document.getElementById("restaurantsList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.innerHTML;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

