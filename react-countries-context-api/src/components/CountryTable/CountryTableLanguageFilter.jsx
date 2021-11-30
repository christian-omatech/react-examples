import { useContext, useState } from "react";
import { languages } from "./languages";
import { AppContext } from "../../context/AppContext";

export const CountryTableLanguageFilter = () => {
    const [context, setContext] = useContext(AppContext);
    const [currentLanguage, setCurrentLanguage] = useState({
        iso: "spa",
        name: "Spanish"
    });

    const translateNameColumn = (language) => {
        const newState = Object.assign({}, context);
        const column = newState.columns.find((column) => column.name === "name");
        column.field = 'translations.' + language.iso + '.common';
        setContext(newState);
        setCurrentLanguage(language);
    }

    return (
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap pb-4">
            {languages.map((language) =>
                <label key={language.name} className="form-check">
                    <input
                        className="form-check-input"
                        name="language"
                        type="radio"
                        checked={(language.iso === currentLanguage.iso)}
                        onChange={() => translateNameColumn(language)}
                    />
                    <span className="form-check-label">{language.name}</span>
                </label>
            )}
        </div>
    );
}
