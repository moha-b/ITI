import {CountryModel} from "../model/country_model.js";

export async function getCountry(countryName) {
    try {
        let response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
        let country = await response.json();
        return new CountryModel(
            country[0].name,
            country[0].region,
            country[0].population,
            country[0].currencies[0].name,
            country[0].languages[0].name,
            country[0].borders,
            country[0].flag
        );
    } catch (e) {
        console.log(`Error :: ${e}`);
    }
}
export async function getNeighbour(neighbourCode) {
    try {
        let response = await fetch(`https://restcountries.com/v2/alpha/${neighbourCode}`);
        let neighbour = await response.json();
        return new CountryModel(
            neighbour.name,
            neighbour.region,
            neighbour.population,
            neighbour.currencies[0].name,
            neighbour.languages[0].name,
            neighbour.borders,
            neighbour.flag
        );
    } catch (e) {
        console.log(`Error :: ${e}`);
    }
}