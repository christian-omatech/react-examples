import { useState } from "react";
import { languages } from "./languages";

export const CountryTableLanguageFilter = ({ setColumns }) => {
    const [currentLanguage, setCurrentLanguage] = useState({
        iso: "spa",
        name: "Spanish"
    });

    const translateNameColumn = (language) => {
        setColumns((prevState) => {
            const newState = [...prevState];
            const column = newState.find((prop) => prop.name === "name");
            column.field = 'translations.' + language.iso + '.common';
            return newState;
        });
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
