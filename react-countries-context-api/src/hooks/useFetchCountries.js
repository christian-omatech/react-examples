import { useEffect } from "react";

export const useFetchCountries = (setState) => {
  useEffect(() => {
    const fetchContries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      setState((prevState) => ({
        ...prevState,
        countries: countries,
        isLoading: false,
      }));
    };
    fetchContries();
  }, [setState]);
};
