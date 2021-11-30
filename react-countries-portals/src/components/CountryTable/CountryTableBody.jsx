import { CountryTableRow } from "./CountryTableRow";

export const CountryTableBody = ({columns, rows, setModalState}) => {
    return (
        <tbody>
            {rows.map((row) => <CountryTableRow key={row.cca2} columns={columns} row={row} setModalState={setModalState}/>)}
        </tbody>
    );
}
