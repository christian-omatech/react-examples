import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { CountryTableRow } from "./CountryTableRow";

export const CountryTableBody = () => {
    const [context] = useContext(AppContext);

    return (
        <tbody>
            {context.countries.map((row) => <CountryTableRow key={row.cca2} row={row}/>)}
        </tbody>
    );
}
