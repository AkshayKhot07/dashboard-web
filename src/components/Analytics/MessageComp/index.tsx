import CallIcon from "@/components/UI/Icons/Svg/CallIcon";
import DownIcon from "@/components/UI/Icons/Svg/DownIcon";
import { InvitesIcon } from "@/components/UI/Icons/Svg/Invites";
import MissedCallIcon from "@/components/UI/Icons/Svg/MissedCallIcon";
import MissedMsgIcon from "@/components/UI/Icons/Svg/MissedMsgIcon";
import MsgIcon from "@/components/UI/Icons/Svg/MsgIcon";
import UpIcon from "@/components/UI/Icons/Svg/UpIcon";
import { userListingDummyDataTypes } from "@/constants/data";
import { useMemo } from "react";
import { FaArrowUp } from "react-icons/fa";
import AnimatedCounter from "../AnimatedCounter";

const MessageComp = ({
  modifiedUsers,
}: {
  modifiedUsers: userListingDummyDataTypes[];
}) => {
  const totalChatsValues = useMemo(() => {
    const { totalSentChats, totalReceivedChats, totalNotReceivedChats } =
      modifiedUsers.reduce(
        (acc, user) => {
          const { sent, received, notReceived } = user.totalChats;

          acc.totalSentChats += sent;
          acc.totalReceivedChats += received;
          acc.totalNotReceivedChats += notReceived;

          return acc;
        },
        { totalSentChats: 0, totalReceivedChats: 0, totalNotReceivedChats: 0 }
      );

    const totalChatsNumber =
      totalSentChats + totalReceivedChats + totalNotReceivedChats;

    return {
      totalSentChats,
      totalReceivedChats,
      totalNotReceivedChats,
      totalChatsNumber,
    };
  }, [modifiedUsers]);

  return (
    <div className="w-full bg-background-200 flex justify-center">
    <div className="p-3 bg-background-100 rounded-md shadow w-[300px]">
      <p className="text-base font-medium text-text-400">Total Chats</p>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex-[2]">
          <div className="flex gap-2">
            {/* <p className="font-bold text-2xl text-text-100">5687</p> */}
            <AnimatedCounter
              className="!font-bold !text-2xl !text-text-100"
              initialValue={0}
              targetValue={totalChatsValues.totalChatsNumber}
            />
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
        <div className="flex gap-1 items-center w-[52px]">
          <span>
            <UpIcon />
          </span>
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalChatsValues.totalSentChats}
          />
        </div>
        <div className="flex gap-1 items-center  w-[66px]">
          <span className="ml-1 md:ml-3">
            <DownIcon />
          </span>
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalChatsValues.totalReceivedChats}
          />
        </div>
        <div className="flex gap-1 items-center">
          <span className="ml-1 md:ml-3">
            <MissedMsgIcon />
          </span>
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalChatsValues.totalNotReceivedChats}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MessageComp;
