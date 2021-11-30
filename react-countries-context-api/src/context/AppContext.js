import { createContext, useState } from "react";
import { useFetchCountries } from "../hooks/useFetchCountries";

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    countries: [],
    isLoading: true,
    columns: [
      { name: "name", isVisible: true, field: "translations.spa.common" },
      { name: "cca3", isVisible: true, field: "cca3" },
      { name: "capital", isVisible: true, field: "capital" },
      { name: "currencies", isVisible: true, field: "currencies" },
      { name: "flag", isVisible: true, field: "flags.svg" },
      { name: "languages", isVisible: true, field: "languages" },
      { name: "region", isVisible: true, field: "region" },
      { name: "subregion", isVisible: true, field: "subregion" },
      { name: "population", isVisible: true, field: "population" },
    ],
  });
  useFetchCountries(setState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
