import { Country } from '../../Domain/Country';
import { useEffect, useState } from 'react';
import { useDi } from '../../Core/DependencyInjector/useDi';
import { FetchCountriesCommandHandler } from '../../Application/FetchCountries/FetchCountriesCommandHandler';
import toast from 'react-hot-toast';

export const useFetchCountries = (): [boolean, Country[]] => {
    const fetchCountriesCommandHandler = useDi(FetchCountriesCommandHandler);
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect((): void => {
        const fetchCountries = async (): Promise<void> => {
            setCountries(await fetchCountriesCommandHandler.handle());
        };
        fetchCountries()
            .catch((ex) => {
                toast.error(`Se ha producido un error ${ex.message}`);
                setCountries([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return [isLoading, countries];
};
