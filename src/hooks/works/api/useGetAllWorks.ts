import { Work } from "@/lib/common/work";
import { useEffect, useState } from "react";

type UseWorksGetAllWorksReturn = {
  works: Work[];
  loading: boolean;
};

export const useGetAllWorks = (): UseWorksGetAllWorksReturn => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://localhost:8080/api/works";
  const API_URL = `${BASE_URL}`;

  const fetchWorks = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("通信に失敗しました。");

      const data: Work[] = await res.json();
      if (data.length === 0) {
        throw new Error("データが見つかりませんでした。");
      }

      setWorks(data);
    } catch (err) {
      console.error("エラー発生： " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return { works, loading };
};
