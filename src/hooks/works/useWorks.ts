import { Work } from "@/lib/common/work";
import { useGetAllWorks } from "./api/useGetAllWorks";

type UseWorksReturn = {
  works: Work[];
  loading: boolean;
};

export const useWorks = (): UseWorksReturn => {
  const { works, loading } = useGetAllWorks();

  return {
    works,
    loading,
  };
};
