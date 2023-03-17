import { useEffect, useState } from "react";
import axios from "axios";

type useFetchState<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: string;
};

export default function useFetch<T = unknown>(url: string): useFetchState<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}
