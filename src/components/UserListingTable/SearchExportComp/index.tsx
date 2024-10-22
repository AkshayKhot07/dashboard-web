import useUserList from "@/hooks/useUserList";
import { RxReset } from "react-icons/rx";

const SearchExportComp = () => {
  const { sortFilterState, sortFilterDispatch } = useUserList();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="search-input flex items-center bg-white px-2 rounded-2xl py-2">
          <label
            htmlFor="search"
            className="text-gray-700 text-sm font-bold mr-[5px] hidden md:block"
          >
            Search:
          </label>
          <input
            value={sortFilterState.searchQuery}
            placeholder="Search by User Name"
            onChange={(e) => {
              sortFilterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
            type="text"
            className="border-none focus:outline-none w-[380px] placeholder:text-text-300 text-base font-normal"
            name="search"
            id="search"
          />
        </div>

        <div
          className="flex items-center gap-1 cursor-pointer hover:opacity-80"
          onClick={() => {
            sortFilterDispatch({
              type: "CLEAR_FILTERS",
            });
          }}
        >
          <RxReset
            style={{
              color: "#4434DD",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          />
          <p className="text-purple-100 font-bold text-sm">Reset</p>
        </div>
      </div>

      <button
        type="button"
        className="export-btn bg-gradient-to-r from-purple-100 to-purple-200 text-white font-medium text-sm px-8 py-2 rounded-3xl"
      >
        Export
      </button>
    </div>
  );
};

export default SearchExportComp;
