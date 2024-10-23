import useUserList from "@/hooks/useUserList";
import Performance from "./Performance";
import useModifiedUsers from "@/hooks/useModifiedUsers";
import InvitesComp from "./InvitesComp";
import CallsComp from "./CallsComp";
import MessageComp from "./MessageComp";
import CustomCarousel from "../CustomSlider";

const Analytics = () => {
  const { sortFilterState } = useUserList();
  const modifiedUsers = useModifiedUsers(sortFilterState);

  return (
    <>
      <div className="md:grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 my-4 hidden">
        <Performance modifiedUsers={modifiedUsers} />
        <InvitesComp modifiedUsers={modifiedUsers} />
        <CallsComp modifiedUsers={modifiedUsers} />
        <MessageComp modifiedUsers={modifiedUsers} />
      </div>
      <div className="relative md:hidden mt-4 mb-14">
        <CustomCarousel>
          <Performance modifiedUsers={modifiedUsers} />
          <InvitesComp modifiedUsers={modifiedUsers} />
          <CallsComp modifiedUsers={modifiedUsers} />
          <MessageComp modifiedUsers={modifiedUsers} />
        </CustomCarousel>
      </div>
    </>
  );
};

export default Analytics;
