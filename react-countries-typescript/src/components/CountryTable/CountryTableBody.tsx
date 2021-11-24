import { CountryTableRow } from './CountryTableRow';
import { CountryRow } from '../../hooks/CountryRow.types';
import { CountryColumn } from '../../hooks/CountryColumn.types';

export interface Properties {
    columns: CountryColumn[];
    rows: CountryRow[];
}

export const CountryTableBody = ({
    columns,
    rows,
}: Properties): JSX.Element => {
    return (
        <tbody>
            {rows.map(
                (row: CountryRow): JSX.Element => (
                    <CountryTableRow
                        key={row.cca2}
                        columns={columns}
                        row={row}
                    />
                )
            )}
        </tbody>
    );
};
