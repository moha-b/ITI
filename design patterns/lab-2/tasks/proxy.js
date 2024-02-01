class Countries {
    getCountries = () => ["Egypt", "Bankai", "UK", "USA"]

}

class CountryServiceProxy {
    constructor() {
        this.countries = new Countries();
        this.cachedCountries = null;
    }

    getCountries() {
        if (this.cachedCountries) {
            console.log("Returning countries");
            return this.cachedCountries;
        } else {
            const countries = this.countries.getCountries();
            console.log("Caching countries...");
            this.cachedCountries = countries;
            return countries;
        }
    }
}

const countryProxy = new CountryServiceProxy();

const countries1 = countryProxy.getCountries();
console.log("Countries 1:", countries1);

const countries2 = countryProxy.getCountries();
console.log("Countries 2:", countries2);