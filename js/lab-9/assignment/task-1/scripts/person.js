class Person {
    static #count = 0;
    constructor(name, gender) {
        if (new.target === Person) {
            throw new Error("Cannot instantiate Person directly. Use a derived class.");
        }

        this.name = this.#validateName(name);
        this.gender = gender;
        this.profilePicture = this.#getDefaultProfilePicture();

        Person.#count++;
    }

    #validateName(name){
        if (name.trim().indexOf(' ') !== -1 &&
            name === name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '))
            return name;
        else throw new TypeError(`${name} must be in Pascal case and contain spaces (e.g., John Doe).`);
    }

    #getDefaultProfilePicture() {
        return this.gender.toLowerCase() === 'male' ? 'images/male.png' : 'images/female.png';
    }

    static getCount() {
        return Person.#count;
    }

    toString() {
        return `Name: ${this.name}, Gender: ${this.gender}`;
    }
}