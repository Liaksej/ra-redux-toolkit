import { Movie } from "@/components/Movie";
import { StoreProvider } from "@/redux/StoreProvider";
import { Search } from "@/components/Search";

export default function Home() {
  return (
    <StoreProvider>
      <Movie />
    </StoreProvider>
  );
}
