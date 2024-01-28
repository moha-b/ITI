class Configuration {
    constructor() {
        if (Configuration.instance) {
            return Configuration.instance;
        }

        this.theme = 'default';
        this.version = '1.0';
        this.myThemeName = 'MyTheme';

        Configuration.instance = this;
    }

    static getInstance() {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    getTheme() {
        return this.theme;
    }

    getVersion() {
        return this.version;
    }

    getMyThemeName() {
        return this.myThemeName;
    }
}

const config1 = Configuration.getInstance();
console.log('Config 1 Theme:', config1.getTheme);
console.log('Config 1 Version:', config1.getVersion());
console.log('Config 1 My Theme Name:', config1.getMyThemeName());

const config2 = Configuration.getInstance();
console.log('Are config1 and config2 the same instance?', config1 === config2);