import { useEffect, useState } from "react";
import TableComponent, { Field, SortOrder } from "../TableComponent";
import useUserList from "@/hooks/useUserList";
import useModifiedUsers from "@/hooks/useModifiedUsers";
import Image from "next/image";

const UserListingTable = () => {
  const { sortFilterState, sortFilterDispatch } = useUserList();
  const [loading, setLoading] = useState(false);
  const [sortedKey, setSortedKey] = useState<{
    key: string;
    order: string;
  }>({
    key: sortFilterState.bySort.key || "",
    order:
      (sortFilterState.bySort.order === ""
        ? SortOrder.ASC
        : sortFilterState.bySort.order) || SortOrder.ASC,
  });

  //useEffect to simulate loading state
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [sortFilterState]);

  //Sorting table
  const handleSortClick = (key: string) => {
    setSortedKey((prevSortedKey) => {
      const newSortedKey = {
        key: key === prevSortedKey.key ? prevSortedKey.key : key,
        order:
          prevSortedKey.key === key
            ? prevSortedKey.order === SortOrder.DESC
              ? SortOrder.ASC
              : SortOrder.DESC
            : SortOrder.DESC,
      };

      sortFilterDispatch({
        type: "SORT_BY",
        payload: newSortedKey,
      });

      return newSortedKey;
    });
  };

  useEffect(() => {
    if (sortFilterState.bySort.key === "") {
      setSortedKey({
        key: "",
        order: "",
      });
    }
  }, [sortFilterState.bySort]);

  const modifiedUsers = useModifiedUsers(sortFilterState);

  const fields: Field[] = [
    {
      key: "",
      label: "USER NAME",
      render: (_, item) => (
        <div className="flex gap-1 items-center py-5 pl-2">
          <Image
            className="w-[20px] h-[20px] rounded-full"
            src={item.image}
            alt={item.name}
            width={20}
            height={20}
          />
          <p className="text-text-100 text-base font-bold">{item.name}</p>
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-[130px]",
      align: "left",
    },

    {
      key: "date",
      label: "DATE",
      render: (value) => (
        <div>
          <p className="text-text-200 font-bold text-xs">{value}</p>
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-[130px]",
      align: "left",
      sort: true,
    },

    {
      key: "email",
      label: "EMAIL",
      render: (value) => (
        <div>
          <p className="text-text-200 font-bold text-xs">{value}</p>
        </div>
      ),
      headerClass: "!min-w-[180px] !max-w-[180px]",
      align: "left",
    },

    {
      key: "source",
      label: "SOURCE",
      render: (value) => (
        <div>
          <p className="text-text-200 font-bold text-xs capitalize">{value}</p>
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-[130px]",
      align: "left",
    },

    {
      key: "type",
      label: "TYPE",
      render: (value) => (
        <div>
          <p className="text-text-200 font-bold text-xs capitalize">{value}</p>
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-[130px]",
      align: "left",
      sort: true,
    },

    {
      key: "status",
      label: "STATUS",
      render: (value) => (
        <div>
          <p className="text-text-200 font-bold text-xs capitalize">{value}</p>
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-[130px]",
      align: "left",
    },

    {
      key: "",
      label: "TAGS",
      render: (_, value) => (
        <div className="flex gap-1">
          {value?.tags?.map((item: string) => (
            <p
              key={item}
              className="text-background-100 flex items-center justify-center bg-text-200 px-2 py-1 rounded-xl font-bold text-xs capitalize"
            >
              {item}
            </p>
          ))}
        </div>
      ),
      headerClass: "!min-w-[130px] !max-w-auto",
      align: "left",
    },
  ];

  return (
    <div className="user-listing-table">
      <TableComponent
        isLoading={loading}
        fields={fields}
        columns={modifiedUsers || []}
        handleSortClick={handleSortClick}
        sortedKey={sortedKey}
      />
    </div>
  );
};

export default UserListingTable;
