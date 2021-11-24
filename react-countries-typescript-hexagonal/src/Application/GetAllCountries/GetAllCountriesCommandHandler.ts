import { inject, injectable } from 'tsyringe';
import { COUNTRY_REPOSITORY } from '../../Core/DependencyInjector/useDi';
import CountryRepositoryInterface from '../../Domain/Contracts/CountryRepositoryInterface';
import { Country } from '../../Domain/Country';

@injectable()
export class GetAllCountriesCommandHandler {
    private countryRepository: CountryRepositoryInterface;

    public constructor(
        @inject(COUNTRY_REPOSITORY)
        countryRepository: CountryRepositoryInterface
    ) {
        this.countryRepository = countryRepository;
    }

    public handle = (): Promise<Country[]> => this.countryRepository.getAll();
}
