export const CountryTableColumnFilter = ({ columns, setColumns }) => {
    const setColumnVisibility = ({ target }) => {
        setColumns((prevState) => {
            let newState = [...prevState];
            const item = newState.find((column) => column.name === target.name);
            item.isVisible = target.checked;
            return newState;
        })
    }

    return (
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
            {columns.map(({name, isVisible}) =>
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
