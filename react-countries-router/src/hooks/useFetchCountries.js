import { useEffect, useState } from "react";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      setCountries(await response.json());
      setLoading(false);
    };
    fetchContries();
  }, []);

  return [isLoading, countries];
};
