import { useContext } from "react";
import { UserListContext, UserListContextType } from "@/context/UserListContext";


const useUserList = () => {
  const context = useContext<UserListContextType | undefined>(UserListContext);
  
  if (!context) {
    throw new Error("useUserList must be used within a UserListContextProvider");
  }

  const { sortFilterState, sortFilterDispatch } = context;

  return { sortFilterState, sortFilterDispatch };
};

export default useUserList;
