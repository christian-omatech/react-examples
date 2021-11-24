import { CountryColumn } from './CountryColumn.types';

interface Properties {
    columns: CountryColumn[];
}

export const CountryTableHeader = ({ columns }: Properties): JSX.Element => {
    const columnVisibility = (isVisible: boolean): string => {
        return isVisible ? 'table-cell' : 'none';
    };

    return (
        <thead>
            <tr>
                {columns.map(
                    ({ name, isVisible }: CountryColumn): JSX.Element => (
                        <th
                            key={name}
                            style={{ display: columnVisibility(isVisible) }}
                        >
                            {name}
                        </th>
                    )
                )}
            </tr>
        </thead>
    );
};
