
export const CountryTableRow = ({ columns, row, setModalState }) => {
    const parseField = (field) => {
        if (isObject(field)) return objectToString(field);
        if (isImage(field)) return createImage(field);
        return field;
    }

    const isObject = (value) => {
        return typeof value === "object" && value !== null;
    }

    const objectToString = (obj) => {
        return Object.values(obj).reduce((acc, value) => {
            acc += parseField(value) + ", ";
            return acc;
        }, []).slice(0, -2);
    }

    const isImage = (value) => {
        return value.toString().endsWith(".svg");
    }

    const createImage = (value) => {
        return <img src={value} className="flag-img" alt="img" />;
    }

    const columnVisibility = (isVisible) => {
        return (isVisible) ? "table-cell" : "none";
    }

    const getValueByPath = (path) => {
        return path.split(".").reduce((object, key) =>
            object && object[key] ? object[key] : "-"
        , row);
    }

    const handleOpenModal = (e) => {
        e.preventDefault();
        setModalState({
            isOpen: true,
            country: row
        });
    };

    return (
        <tr>
            {columns.map(({name, isVisible, field}) =>
                <td key={name} style={{ display: columnVisibility(isVisible) }}>
                    {(name === "name")
                        ?
                        <a href="#" onClick={ handleOpenModal }> {parseField(getValueByPath(field))} </a>
                        :
                        parseField(getValueByPath(field))
                    }
                </td>
            )}
        </tr>
    );
}
