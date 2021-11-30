import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const CountryTableColumnFilter = () => {
    const [context, setContext] = useContext(AppContext);

    const setColumnVisibility = ({ target }) => {
        const newState = Object.assign({}, context);
        const column = newState.columns.find((column) => column.name === target.name);
        column.isVisible = target.checked;
        setContext(newState);
    }

    return (
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
            {context.columns.map(({name, isVisible}) =>
                <label key={name} className="form-check">
                    <input
                        className="form-check-input"
                        name={name}
                        checked={isVisible}
                        type="checkbox"
                        onChange={setColumnVisibility}
                    />
                    <span className="form-check-label">{name}</span>
                </label>
            )}
        </div>
    );
}
