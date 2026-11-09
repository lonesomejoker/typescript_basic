import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export const useFetch = <T>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!url) return;

    let isMounted = true; // prevent state update after unmount

    const fetchData = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data: T = await res.json();

        if (isMounted) {
          setState({
            data,
            error: null,
            loading: false,
          });
        }
      } catch (err: any) {
        if (isMounted) {
          setState({
            data: null,
            error: err.message || "Something went wrong",
            loading: false,
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};