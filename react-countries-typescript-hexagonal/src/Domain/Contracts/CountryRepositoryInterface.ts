import { Country } from '../Country';

export default interface CountryRepositoryInterface {
    getAll(): Promise<Country[]>;
}
