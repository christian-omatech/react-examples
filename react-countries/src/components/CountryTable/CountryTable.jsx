import { useEffect, useState, Fragment } from "react";
import { CountryTableBody } from "./CountryTableBody";
import { CountryTableColumnFilter } from "./CountryTableColumnFilter";
import { CountryTableHeader } from "./CountryTableHeader";
import { CountryTableLanguageFilter } from "./CountryTableLanguageFilter";
import "./CountryTable.css";

export const CountryTable = () => {
    const [countries, setCountries] = useState([]);
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

    useEffect(() => {
        const fetchContries = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            setCountries(await response.json());
        }
        fetchContries();
    }, []);

    return (
        <Fragment>
            {countries.length > 0 ?
                <>
                    <CountryTableLanguageFilter columns={columns} setColumns={setColumns}/>
                    <CountryTableColumnFilter columns={columns} setColumns={setColumns} />
                    {<table className="table table-striped table-sm">
                        <CountryTableHeader columns={columns}/>
                        <CountryTableBody columns={columns} rows={countries} />
                    </table>}
                </>
                : <span>Loading...</span>
            }
        </Fragment>
    );
}