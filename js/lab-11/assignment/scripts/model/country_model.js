export class CountryModel{
    constructor(name, region, population, currencies, language, neighbour, image) {
        this.name = name;
        this.region = region;
        this.population = population;
        this.currency = currencies;
        this.language = language;
        this.neighbours = neighbour;
        this.image = image;
    }
}