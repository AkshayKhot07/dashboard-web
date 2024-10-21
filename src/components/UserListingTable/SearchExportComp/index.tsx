const SearchExportComp = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="search-input flex items-center bg-white px-2 rounded-2xl py-2">
        <label
          htmlFor="search"
          className="text-gray-700 text-sm font-bold mr-[5px] hidden md:block"
        >
          Search:
        </label>
        <input
          //   value={sortFilterState.searchQuery}
          placeholder="Search for Users"
          //   onChange={(e) => {
          //     sortFilterDispatch({
          //       type: "FILTER_BY_SEARCH",
          //       payload: e.target.value,
          //     });
          //   }}
          type="text"
        //   className="border-2 border-gray-400 rounded-md bg-gray-200 px-2"
        className="border-none focus:outline-none w-[380px] placeholder:text-text-300 text-base font-normal"
          name="search"
          id="search"
        />
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
