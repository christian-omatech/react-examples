export const CountryTableHeader = ({ columns }) => {
    const columnVisibility = (isVisible) => {
        return (isVisible) ? "table-cell" : "none";
    }

    return (
        <thead>
            <tr>
                {columns.map(({name, isVisible}) =>
                    <th key={name} style={{ display: columnVisibility(isVisible) }}>
                        {name}
                    </th>
                )}
            </tr>
        </thead>
    );
}
