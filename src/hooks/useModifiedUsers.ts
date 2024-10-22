import { useMemo } from "react";
import { userListingDummyData } from "@/constants/data";
import { SortFilterState } from "@/context/UserListReducer";

const useModifiedUsers = (sortFilterState: SortFilterState) => {
  const modifiedUsers = useMemo(() => {
    let modifiedUsersData = [...userListingDummyData];

    if (sortFilterState.bySort.key && sortFilterState.bySort.order) {
      if (sortFilterState.bySort.key === "date") {
        modifiedUsersData = modifiedUsersData.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return sortFilterState.bySort.order === "DESC"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });
      }

      if (sortFilterState.bySort.key === "type") {
        modifiedUsersData = modifiedUsersData.sort((a, b) => {
          return sortFilterState.bySort.order === "DESC"
            ? b.type.localeCompare(a.type)
            : a.type.localeCompare(b.type);
        });
      }
    }

    if (sortFilterState.searchQuery) {
      const searchQueryNormalized = sortFilterState.searchQuery
        .toLowerCase()
        .replace(/[\s-]+/g, "");

      modifiedUsersData = modifiedUsersData.filter((item) => {
        const nameNormalized = item.name.toLowerCase().replace(/[\s-]+/g, "");
        return nameNormalized.includes(searchQueryNormalized);
      });
    }

    if (sortFilterState.byDays) {
      const today = new Date();
      const byDaysNumber = parseInt(sortFilterState.byDays, 10);

      modifiedUsersData = modifiedUsersData.filter((item) => {
        const itemDate = new Date(item.date);
        if (!isNaN(itemDate.getTime())) {
          const timeDifference = today.getTime() - itemDate.getTime();
          const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
          return dayDifference <= byDaysNumber;
        }
        return false;
      });
    }

    return modifiedUsersData;
  }, [
    sortFilterState.byDays,
    sortFilterState.bySort.key,
    sortFilterState.bySort.order,
    sortFilterState.searchQuery,
  ]);

  return modifiedUsers;
};

export default useModifiedUsers;
