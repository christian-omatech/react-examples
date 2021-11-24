import { CountryApi } from './CountryApi.types';
export class GetAllCountriesApi {
    public fetch = async (): Promise<CountryApi[]> => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        return response.json();
    };
}
