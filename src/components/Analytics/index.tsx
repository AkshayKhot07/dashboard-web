import useUserList from "@/hooks/useUserList";
import Performance from "./Performance";
import useModifiedUsers from "@/hooks/useModifiedUsers";
import InvitesComp from "./InvitesComp";
import CallsComp from "./CallsComp";
import MessageComp from "./MessageComp";

const Analytics = () => {
  const { sortFilterState } = useUserList();
  const modifiedUsers = useModifiedUsers(sortFilterState);

  return (
    <div className="border border-red-400 grid grid-cols-4 gap-3 my-4">
      <Performance modifiedUsers={modifiedUsers} />
      <InvitesComp modifiedUsers={modifiedUsers} />
      <CallsComp modifiedUsers={modifiedUsers} />
      <MessageComp modifiedUsers={modifiedUsers} />
    </div>
  );
};

export default Analytics;
