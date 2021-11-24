import { CountryType } from './Country.types';

export class Country {
    private name: Record<string, any>;
    private cca2: string;
    private cca3: string;
    private capital: string;
    private currencies: string;
    private flag: string;
    private languages: string;
    private region: string;
    private subregion: string;
    private population: number;

    constructor(country: CountryType) {
        this.name = country.name;
        this.cca2 = country.cca2;
        this.cca3 = country.cca3;
        this.capital = country.capital;
        this.currencies = country.currencies;
        this.flag = country.flag;
        this.languages = country.languages;
        this.region = country.region;
        this.subregion = country.subregion;
        this.population = country.population;
    }

    public getValue = (key: keyof CountryType): string => {
        if (key.includes('name')) {
            return key.split('.').reduce((object: any, key: string) => {
                return object && object[key] ? object[key] : '-';
            }, this);
        }
        return this[key] as string;
    };
}
