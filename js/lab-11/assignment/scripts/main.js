import {createCountryCard} from "./utils/functions.js";
import * as api from "./api/api.js";


window.addEventListener("load", async function () {
    // 1 -
    let country = await api.getCountry('Germany');
    createCountryCard(country);

    // 2 -
    let neighbour;
    for (const neighbourCode of country.neighbours) {
        neighbour = await api.getNeighbour(neighbourCode);
        createCountryCard(neighbour);
    }
})