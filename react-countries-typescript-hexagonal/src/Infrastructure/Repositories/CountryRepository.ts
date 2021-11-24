import { GetAllCountriesApi } from './../Services/GetAllCountriesApi';
import CountryRepositoryInterface from '../../Domain/Contracts/CountryRepositoryInterface';
import { Country } from '../../Domain/Country';
import { CountryApi } from '../Services/CountryApi.types';
import { injectable } from 'tsyringe';

@injectable()
export class CountryRepository implements CountryRepositoryInterface {
    private getAllCountries: GetAllCountriesApi;

    public constructor(getAllCountrise: GetAllCountriesApi) {
        this.getAllCountries = getAllCountrise;
    }

    public async getAll(): Promise<Country[]> {
        const countries = await this.getAllCountries.fetch();
        return countries.map((country: CountryApi): Country => {
            return new Country({
                name: country.translations,
                cca2: country.cca2,
                cca3: country.cca3,
                capital: country.capital?.join(', '),
                population: country.population,
                region: country.region,
                subregion: country.subregion,
                flag: country.flags.svg,
                currencies: this.objectToString(country.currencies),
                languages: this.objectToString(country.languages),
            });
        });
    }

    private objectToString = (value: any): string => {
        if (value) {
            return (
                Object.values(value).reduce((acc, val: any) => {
                    acc += this.isObject(val)
                        ? this.objectToString(val)
                        : val + ', ';
                    return acc;
                }, '') as string
            ).slice(0, -2);
        }
        return value;
    };

    private isObject = (value: string): boolean => {
        return typeof value === 'object' && value !== null;
    };
}
