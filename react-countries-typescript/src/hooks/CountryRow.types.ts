export interface CountryRow {
    name: {
        common: string;
    };
    cca2: string;
    cca3: string;
    currencies: Record<string, any>;
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        prs: string;
        pus: string;
        tuk: string;
    };
    translations: {
        [key: string]: {
            common: string;
        };
    };
    population: number;
    flags: {
        svg: string;
    };
}
