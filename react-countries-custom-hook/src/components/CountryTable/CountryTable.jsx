import { useState, Fragment } from "react";
import { CountryTableBody } from "./CountryTableBody";
import { CountryTableColumnFilter } from "./CountryTableColumnFilter";
import { CountryTableHeader } from "./CountryTableHeader";
import { CountryTableLanguageFilter } from "./CountryTableLanguageFilter";
import { useFetchCountries } from "../../hooks/useFetchCountries";
import "./CountryTable.css";

export const CountryTable = () => {
    const [isLoading, countries] = useFetchCountries();
    const [columns, setColumns] = useState([
        { name: "name", isVisible: true, field: "translations.spa.common" },
        { name: "cca3", isVisible: true, field: "cca3" },
        { name: "capital", isVisible: true, field: "capital" },
        { name: "currencies", isVisible: true, field: "currencies" },
        { name: "flag", isVisible: true, field: "flags.svg" },
        { name: "languages", isVisible: true, field: "languages" },
        { name: "region", isVisible: true, field: "region" },
        { name: "subregion", isVisible: true, field: "subregion" },
        { name: "population", isVisible: true, field: "population" },
    ]);

    return (
        <Fragment>
            {
                isLoading ? <span>Loading...</span>
                :
                <>
                    <CountryTableLanguageFilter columns={columns} setColumns={setColumns}/>
                    <CountryTableColumnFilter columns={columns} setColumns={setColumns} />
                    {<table className="table table-striped table-sm">
                        <CountryTableHeader columns={columns}/>
                        <CountryTableBody columns={columns} rows={countries} />
                    </table>}
                </>
            }
        </Fragment>
    );
}
