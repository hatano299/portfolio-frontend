import { Work } from "@/lib/common/work";
import { useEffect, useState } from "react";

type UseWorksGetAllWorksReturn = {
  works: Work[],
  loading: boolean,
}

export const useGetAllWorks = (): UseWorksGetAllWorksReturn => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/works")
      .then((res) => {
        if (!res.ok) throw new Error("通信に失敗しました。");
        return res.json();
      })
      .then((data) => setWorks(data))
      .catch((err) => console.error("エラー発生： " + err))
      .finally(() => setLoading(false))
  }, []);
  
  return { works, loading };
};
