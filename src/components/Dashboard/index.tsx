"use client";

import { UserListContextProvider } from "@/context/UserListContext";
import UserListingTable from "../UserListingTable";
import SearchExportComp from "../UserListingTable/SearchExportComp";
import SortByDays from "../SortByDays";
import Performance from "../Analytics/Performance";
import Analytics from "../Analytics";

const DashboardComp = () => {
  return (
    <div>
      <UserListContextProvider>
        <div className="flex min-h-screen">
          <div className="w-[108px] border border-black">Sidebar</div>
          <div className="w-full p-5 bg-background-200">
            <Analytics />
            <div className="p-4  border border-blue-500 bg-background-200 flex flex-col gap-2">
              <SortByDays />
              <SearchExportComp />
              <UserListingTable />
            </div>
          </div>
        </div>
      </UserListContextProvider>
    </div>
  );
};

export default DashboardComp;
