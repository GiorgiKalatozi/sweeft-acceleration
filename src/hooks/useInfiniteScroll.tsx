import { User } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

type useInfiniteProps = {
  query: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function useInfiniteScroll({
  query,
  page,
  setPage,
}: useInfiniteProps) {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(query);
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
