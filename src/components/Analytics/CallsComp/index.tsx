import CallIcon from "@/components/UI/Icons/Svg/CallIcon";
import DownIcon from "@/components/UI/Icons/Svg/DownIcon";
import { InvitesIcon } from "@/components/UI/Icons/Svg/Invites";
import MissedCallIcon from "@/components/UI/Icons/Svg/MissedCallIcon";
import UpIcon from "@/components/UI/Icons/Svg/UpIcon";
import { userListingDummyDataTypes } from "@/constants/data";
import { useMemo } from "react";
import { FaArrowUp } from "react-icons/fa";
import AnimatedCounter from "../AnimatedCounter";

const CallsComp = ({
  modifiedUsers,
}: {
  modifiedUsers: userListingDummyDataTypes[];
}) => {
  const totalCallsValues = useMemo(() => {
    const { totalIncomingNumber, totalOutingNumber, totalMissedNumber } =
      modifiedUsers.reduce(
        (acc, user) => {
          const { incoming, outgoing, missedCall } = user.totalCalls;

          acc.totalIncomingNumber += incoming;
          acc.totalOutingNumber += outgoing;
          acc.totalMissedNumber += missedCall;

          return acc;
        },
        { totalIncomingNumber: 0, totalOutingNumber: 0, totalMissedNumber: 0 }
      );

    const totalCallsNumber =
      totalIncomingNumber + totalOutingNumber + totalMissedNumber;

    return {
      totalIncomingNumber,
      totalOutingNumber,
      totalMissedNumber,
      totalCallsNumber,
    };
  }, [modifiedUsers]);


  return (
    <div className="w-full bg-background-200 flex justify-center">
    <div className="p-3 bg-background-100 rounded-md shadow w-[300px]">
      <p className="text-base font-medium text-text-400">Total Calls</p>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex-[2]">
          <div className="flex gap-2">
            <AnimatedCounter
              className="!font-bold !text-2xl !text-text-100"
              initialValue={0}
              targetValue={totalCallsValues.totalCallsNumber}
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
          <CallIcon />
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
            targetValue={totalCallsValues.totalIncomingNumber}
          />
        </div>
        <div className="flex gap-1 items-center w-[66px]">
          <span className="ml-3">
            <DownIcon />
          </span>
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalCallsValues.totalOutingNumber}
          />
        </div>
        <div className="flex gap-1 items-center">
          <span className="ml-3">
            <MissedCallIcon />
          </span>
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalCallsValues.totalMissedNumber}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CallsComp;
