import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const CountryTableRow = ({ row }) => {
    const [context] = useContext(AppContext);

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

    return (
        <tr>
            {context.columns.map(({name, isVisible, field}) =>
                <td key={name} style={{ display: columnVisibility(isVisible) }}>
                    {parseField(getValueByPath(field))}
                </td>
            )}
        </tr>
    );
}
