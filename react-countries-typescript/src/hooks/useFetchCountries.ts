import { useEffect, useState } from 'react';
import { CountryRow } from './CountryRow.types';

export const useFetchCountries = (): [boolean, CountryRow[]] => {
    const [countries, setCountries] = useState<CountryRow[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect((): void => {
        const fetchCountries = async (): Promise<void> => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            setCountries(await response.json());
            setLoading(false);
        };
        fetchCountries();
    }, []);

    return [isLoading, countries];
};
