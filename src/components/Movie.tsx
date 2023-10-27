import { useGetMoviesQuery } from "@/redux/service/omdbApi";

export function Movie() {
  const { data, isLoading, error } = useGetMoviesQuery("Terminator");
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}
