import { Country } from '../../Domain/Country';
import { useEffect, useState } from 'react';
import { useDi } from '../../Core/DependencyInjector/useDi';
import { GetAllCountriesCommandHandler } from '../../Application/GetAllCountries/GetAllCountriesCommandHandler';

export const useFetchCountries = (): [boolean, Country[]] => {
    const getAllCountriesCommandHandler = useDi(GetAllCountriesCommandHandler);
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect((): void => {
        const fetchCountries = async (): Promise<void> => {
            setCountries(await getAllCountriesCommandHandler.handle());
            setLoading(false);
        };
        fetchCountries();
    }, []);

    return [isLoading, countries];
};
