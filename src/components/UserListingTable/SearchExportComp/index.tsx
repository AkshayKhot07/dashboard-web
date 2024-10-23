import useModifiedUsers from "@/hooks/useModifiedUsers";
import useUserList from "@/hooks/useUserList";
import { RxReset } from "react-icons/rx";
import { FaFileDownload } from "react-icons/fa";

const SearchExportComp = () => {
  const { sortFilterState, sortFilterDispatch } = useUserList();
  const modifiedUsers = useModifiedUsers(sortFilterState);

  const handleDownloadUsersData = () => {
    let str = "date,name,email,source,status\n";
    modifiedUsers?.forEach((el) => {
      const row = `${el.date.split(",")[0].trim()},${el.name},${el.email},${
        el.source
      },${el.status}\n`;
      str = str + row;
    });

    const element = document.createElement("a");
    const sampleFile = new Blob([`${str}`], {
      type: "text/csv",
    });

    element.href = URL.createObjectURL(sampleFile);
    element.download = "users list.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-between">
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
            className="border-none focus:outline-none w-auto md:w-[380px] placeholder:text-text-300 text-base font-normal"
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

      <div onClick={handleDownloadUsersData} className="md:hidden">
        <FaFileDownload className="text-purple-100 w-7 h-7" />
      </div>

      <button
        type="button"
        onClick={handleDownloadUsersData}
        className="hidden md:block export-btn bg-gradient-to-r from-purple-100 to-purple-200 text-white font-medium text-sm px-8 py-2 rounded-3xl"
      >
        Export
      </button>
    </div>
  );
};

export default SearchExportComp;
