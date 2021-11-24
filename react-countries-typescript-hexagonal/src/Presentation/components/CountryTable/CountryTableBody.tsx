import { Country } from '../../../Domain/Country';
import { CountryColumn } from './CountryColumn.types';
import { CountryTableRow } from './CountryTableRow';

export interface Properties {
    columns: CountryColumn[];
    rows: Country[];
}

export const CountryTableBody = ({
    columns,
    rows,
}: Properties): JSX.Element => {
    return (
        <tbody>
            {rows.map(
                (row: Country): JSX.Element => (
                    <CountryTableRow
                        key={row.getValue('cca2')}
                        columns={columns}
                        row={row}
                    />
                )
            )}
        </tbody>
    );
};
