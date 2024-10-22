import CallIcon from "@/components/UI/Icons/Svg/CallIcon";
import DownIcon from "@/components/UI/Icons/Svg/DownIcon";
import { InvitesIcon } from "@/components/UI/Icons/Svg/Invites";
import MissedCallIcon from "@/components/UI/Icons/Svg/MissedCallIcon";
import MissedMsgIcon from "@/components/UI/Icons/Svg/MissedMsgIcon";
import MsgIcon from "@/components/UI/Icons/Svg/MsgIcon";
import UpIcon from "@/components/UI/Icons/Svg/UpIcon";
import { userListingDummyDataTypes } from "@/constants/data";
import { FaArrowUp } from "react-icons/fa";

const MessageComp = ({
  modifiedUsers,
}: {
  modifiedUsers: userListingDummyDataTypes[];
}) => {
  return (
    <div className="p-3 bg-background-100 rounded-md shadow">
      <p className="text-base font-medium text-text-400">Total Chats</p>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex-[2]">
          <div className="flex gap-2">
            <p className="font-bold text-2xl text-text-100">5687</p>
            <p className="text-green-300 py-1 px-2 rounded-2xl flex gap-1 items-center bg-green-100 w-fit">
              <span>
                {" "}
                <FaArrowUp className="text-green-600 text-sm" />
              </span>
              <span className="text-green-600 text-sm">20.50%</span>
            </p>
          </div>
        </div>
        <div className="flex-1">
        <MsgIcon />
        </div>
      </div>

      <div className="flex gap-3 divide-x-2 pt-2">
        <p className="flex gap-1 items-center">
            <span>

          <UpIcon />
            </span>
          <span className="text-text-100 text-sm font-bold">3257</span>
        </p>
        <p className="flex gap-1 items-center">
            <span className="ml-3">

          <DownIcon />
            </span>
          <span className="text-text-100 text-sm font-bold">1987</span>
        </p>
        <p className="flex gap-1 items-center">
            <span className="ml-3">

          <MissedMsgIcon />
            </span>
          <span className="text-text-100 text-sm font-bold">1987</span>
        </p>
      </div>
    </div>
  );
};

export default MessageComp;
