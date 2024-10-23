export interface SortFilterState {
  bySort: {
    key: string;
    order: string;
  };
  searchQuery: string;
  byDays: string;
}

export type SortFilterAction =
  | { type: "SORT_BY"; payload: { key: string; order: string } }
  | { type: "FILTER_BY_SEARCH"; payload: string }
  | { type: "FILTER_BY_DAYS"; payload: string }
  | { type: "INIT_STATE"; payload: SortFilterState }
  | { type: "CLEAR_FILTERS" };


export const sortFilterReducer = (
  state: SortFilterState,
  action: SortFilterAction
): SortFilterState => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, bySort: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_DAYS":
      return { ...state, byDays: action.payload };
    case "CLEAR_FILTERS":
      return {
        bySort: {
          key: "",
          order: "",
        },
        searchQuery: "",
        byDays:""
      };
    default:
      return state;
  }
};
