import { createContext, Dispatch, useEffect, useReducer } from "react";
import {
  SortFilterAction,
  sortFilterReducer,
  SortFilterState,
} from "../UserListReducer";

export interface UserListContextType {
  sortFilterState: SortFilterState;
  sortFilterDispatch: Dispatch<SortFilterAction>;
}

const UserListContext = createContext<UserListContextType | undefined>(
  undefined
);

// Local Storage Functions
const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const UserListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialSortFilterState: SortFilterState = {
    bySort: {
      key: "",
      order: "",
    },
    searchQuery: "",
    byDays: "",
  };

  const [sortFilterState, sortFilterDispatch] = useReducer(
    sortFilterReducer,
    initialSortFilterState
  );

  useEffect(() => {
    const savedSortFilterState = getLocalStorage("sortFilterState");
    if (savedSortFilterState) {
      sortFilterDispatch({
        type: "INIT_STATE",
        payload: savedSortFilterState,
      });
    }
  }, []);

  // Effect to persist sortFilterState to localStorage
  useEffect(() => {
    setLocalStorage("sortFilterState", sortFilterState);
  }, [sortFilterState]);

  return (
    <UserListContext.Provider value={{ sortFilterState, sortFilterDispatch }}>
      {children}
    </UserListContext.Provider>
  );
};

export { UserListContext, UserListContextProvider };
