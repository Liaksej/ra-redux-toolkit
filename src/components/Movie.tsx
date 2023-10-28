import { useGetMoviesQuery } from "@/redux/service/omdbApi";
import { useSelector } from "react-redux";
import { selecAppModule } from "@/redux/app/selector";

export function Movie() {
  const state = useSelector((state) => selecAppModule(state).name);
  const { data, isLoading, error } = useGetMoviesQuery(state);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (state === "") {
    return <div>Enter a movie title</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
