
export const createCountryCard = (country) => {
    // create ui objects
    let divObject = document.createElement("div");
    let countryImgObject = document.createElement("img");
    //
    let countryNameTextObject = document.createElement("p");
    let countryRegionTextObject = document.createElement("p");
    //
    let populationBodyObject = document.createElement("p");
    let languageBodyObject = document.createElement("p");
    let currencyBodyObject = document.createElement("p");

    // add data
    countryImgObject.src = country.image;
    countryNameTextObject.textContent = country.name;
    countryRegionTextObject.textContent = country.region;

    countryNameTextObject.classList.add("country-name");
    countryRegionTextObject.classList.add("country-region");
    //
    populationBodyObject.textContent = `👨‍👩‍👦    ${country.population}`;
    languageBodyObject.textContent = `🗣️    ${country.language}`;
    currencyBodyObject.textContent = `💰    ${country.currency}`;

    populationBodyObject.classList.add("info");
    languageBodyObject.classList.add("info");
    currencyBodyObject.classList.add("info");

    // add the card to the body
    divObject.append(countryImgObject);
    divObject.append(countryNameTextObject);
    divObject.append(countryRegionTextObject);
    //
    divObject.append(populationBodyObject);
    divObject.append(languageBodyObject);
    divObject.append(currencyBodyObject);
    document.body.append(divObject);
}