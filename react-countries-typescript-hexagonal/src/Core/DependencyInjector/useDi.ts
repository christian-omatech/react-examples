import { CountryRepository } from '../../Infrastructure/Repositories/CountryRepository';
import { InjectionToken, container } from 'tsyringe';

export const COUNTRY_REPOSITORY = Symbol('COUNTRY_REPOSITORY');

container.register(COUNTRY_REPOSITORY, CountryRepository);

export function useDi<T>(injectionToken: InjectionToken<T>): any {
    return container.resolve<T>(injectionToken);
}
