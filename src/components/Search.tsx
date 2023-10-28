import { useDispatch } from "react-redux";
import { setName } from "@/redux/app/slices";

export function Search() {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(e) => dispatch(setName(e.target.value))}
      />
    </div>
  );
}
