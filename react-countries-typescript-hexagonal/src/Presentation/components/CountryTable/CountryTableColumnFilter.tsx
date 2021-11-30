import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CountryColumn } from './CountryColumn.types';

interface Properties {
    columns: CountryColumn[];
    setColumns: Dispatch<SetStateAction<CountryColumn[]>>;
}

export const CountryTableColumnFilter = ({
    columns,
    setColumns,
}: Properties): JSX.Element => {
    const setColumnVisibility = ({
        target,
    }: ChangeEvent<HTMLInputElement>): void => {
        setColumns((prevState: CountryColumn[]): CountryColumn[] => {
            const newState = [...prevState];
            const column = newState.find(
                (column: CountryColumn): boolean => column.name === target.name
            ) ?? { isVisible: null };
            column.isVisible = target.checked;
            return newState;
        });
    };

    return (
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
            {columns.map(
                ({ name, isVisible }: CountryColumn): JSX.Element => (
                    <label key={name} className="form-check">
                        <input
                            className="form-check-input"
                            name={name}
                            checked={isVisible}
                            type="checkbox"
                            onChange={setColumnVisibility}
                        />
                        <span className="form-check-label">{name}</span>
                    </label>
                )
            )}
        </div>
    );
};
