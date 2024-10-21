import { daysList } from "@/constants/data";

const SortByDays = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div>
        <label className="form-label pr-2">Sort by:</label>
        <select
          className="form-input capitalize border-2 border-gray-400 rounded-md"
          name="size"
          style={{
            textTransform: "capitalize",
          }}
          //   value={sortFilterState.bySize}
          //   onChange={(e) => {
          //     sortFilterDispatch({
          //       type: "FILTER_BY_SIZE",
          //       payload: e.target.value,
          //     });
          //   }}
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
