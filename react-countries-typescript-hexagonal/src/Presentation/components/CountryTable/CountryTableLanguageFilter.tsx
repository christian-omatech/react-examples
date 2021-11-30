import { Dispatch, SetStateAction, useState } from 'react';
import { CountryColumn } from './CountryColumn.types';
import { languages } from './languages';

interface Properties {
    setColumns: Dispatch<SetStateAction<CountryColumn[]>>;
}

interface Language {
    iso: string;
    name: string;
}

export const CountryTableLanguageFilter = ({
    setColumns,
}: Properties): JSX.Element => {
    const [currentLanguage, setCurrentLanguage] = useState<Language>({
        iso: 'spa',
        name: 'Spanish',
    });

    const translateNameColumn = (language: Language): void => {
        setColumns((prevState: CountryColumn[]): CountryColumn[] => {
            const newState = [...prevState];
            const column = newState.find(
                (column: CountryColumn): boolean => column.name === 'name'
            ) ?? {
                field: '',
            };
            column.field = 'name.' + language.iso + '.common';
            return newState;
        });
        setCurrentLanguage(language);
    };

    return (
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
            {languages.map(
                (language: Language): JSX.Element => (
                    <label key={language.name} className="form-check">
                        <input
                            className="form-check-input"
                            name="language"
                            type="radio"
                            checked={language.iso === currentLanguage.iso}
                            onChange={() => translateNameColumn(language)}
                        />
                        <span className="form-check-label">
                            {language.name}
                        </span>
                    </label>
                )
            )}
        </div>
    );
};
