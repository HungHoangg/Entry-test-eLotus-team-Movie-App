import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import { useToast } from "../components/ErrorMessage/ErrorMessage";
import type { CountryList } from "../types/movie";

export const useGetCountries = () => {
  const [countries, setCountries] = useState<CountryList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { showError } = useToast();

  useEffect(() => {
    const fetchCountriesList = async () => {
      try {
        const data = await movieApi.getCountryList();
        setCountries(data || []);
      } catch (err) {
        showError("Cannot show countries list!!!");
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesList();
  }, []);

  return { countries, loading };
};
