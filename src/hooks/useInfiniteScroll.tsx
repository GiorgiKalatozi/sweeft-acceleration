import { BASE_URL } from "@/services";
import { User } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useInfiniteScroll() {
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(`${BASE_URL}/user/${page}/20`);

      setData((prev) => {
        return [...prev, ...response.data.list];
      });
      setIsLoading(false);
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return { isLoading, data };
}
