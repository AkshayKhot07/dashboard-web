import { daysList } from "@/constants/data";
import useUserList from "@/hooks/useUserList";
import { SiGoogleanalytics } from "react-icons/si";

const SortByDays = () => {
    const { sortFilterState, sortFilterDispatch } = useUserList();

  return (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
      <SiGoogleanalytics className="text-text-200" />
      <p className="text-text-200 text-lg font-semibold">Analytics</p>
      </div>
      <div>
        <label className="form-label pr-2 font-medium text-sm text-text-200">Sort by:</label>
        <select
          className="form-input capitalize rounded-md border-none bg-background-100 p-2 focus:outline-none text-text-200 font-medium text-sm"
          name="size"
          style={{
            textTransform: "capitalize",
          }}
            value={sortFilterState.byDays}
            onChange={(e) => {
              sortFilterDispatch({
                type: "FILTER_BY_DAYS",
                payload: e.target.value,
              });
            }}
        >
          <option value="" disabled>
            Select Days
          </option>
          {daysList?.map((item) => (
            <option
              key={item}
              value={item}
              style={{
                textTransform: "capitalize",
              }}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortByDays;
