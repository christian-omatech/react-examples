import { CountryTableRow } from "./CountryTableRow";

export const CountryTableBody = ({columns, rows}) => {
    return (
        <tbody>
            {rows.map((row) => <CountryTableRow key={row.cca2} columns={columns} row={row}/>)}
        </tbody>
    );
}
