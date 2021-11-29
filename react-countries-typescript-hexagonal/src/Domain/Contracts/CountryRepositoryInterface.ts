import { Country } from '../Country';

export default interface CountryRepositoryInterface {
    fetchCountries(): Promise<Country[]>;
}
