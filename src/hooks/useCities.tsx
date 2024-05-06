import { fetchCities } from "../api/server/cities/cities";
import { useQuery } from "react-query";

const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities,
    refetchOnWindowFocus: false
  })
}

export { useCities };