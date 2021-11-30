import { useContext, Fragment } from "react";
import { CountryTableBody } from "./CountryTableBody";
import { CountryTableColumnFilter } from "./CountryTableColumnFilter";
import { CountryTableHeader } from "./CountryTableHeader";
import { CountryTableLanguageFilter } from "./CountryTableLanguageFilter";
import { AppContext } from "../../context/AppContext";
import "./CountryTable.css";

export const CountryTable = () => {
    const [context] = useContext(AppContext);

    return (
        <Fragment>
            {
                context.isLoading ? <span>Loading...</span>
                :
                <>
                    <CountryTableLanguageFilter />
                    <CountryTableColumnFilter />
                    <table className="table table-striped table-sm">
                        <CountryTableHeader />
                        <CountryTableBody />
                    </table>
                </>
            }
        </Fragment>
    );
}
