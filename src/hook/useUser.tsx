import axios from "axios";
import { useEffect, useState } from "react";
import { UserType } from "src/types";

export const useUser = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data: UserType = await resp?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (error_: any) {
        setError(error_);
        setIsLoading(false);
      }
    };
    fetchData()
  }, [url]);

  return { isLoading, apiData, error };
};
