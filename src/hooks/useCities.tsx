import { useQuery } from "react-query";
import { fetchCities } from "../api/server/cities/cities";

const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities
  })
}

export { useCities };