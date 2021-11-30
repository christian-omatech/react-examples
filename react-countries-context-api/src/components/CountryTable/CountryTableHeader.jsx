import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const CountryTableHeader = () => {
    const [context] = useContext(AppContext);

    const columnVisibility = (isVisible) => {
        return (isVisible) ? "table-cell" : "none";
    }

    return (
        <thead>
            <tr>
                {context.columns.map(({name, isVisible}) =>
                    <th key={name} style={{ display: columnVisibility(isVisible) }}>
                        {name}
                    </th>
                )}
            </tr>
        </thead>
    );
}
