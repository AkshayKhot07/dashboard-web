import { InvitesIcon } from "@/components/UI/Icons/Svg/Invites";
import { userListingDummyDataTypes } from "@/constants/data";
import { useMemo } from "react";
import { FaArrowUp } from "react-icons/fa";
import AnimatedCounter from "../AnimatedCounter";

const InvitesComp = ({
  modifiedUsers,
}: {
  modifiedUsers: userListingDummyDataTypes[];
}) => {
  const totalInvitesValues = useMemo(() => {
    const { totalSentNumber, totalAcceptedNumber } = modifiedUsers.reduce(
      (acc, user) => {
        const { sent, accepted } = user.totalInvites;

        acc.totalSentNumber += sent;
        acc.totalAcceptedNumber += accepted;

        return acc;
      },
      { totalSentNumber: 0, totalAcceptedNumber: 0 }
    );

    const totalInvitesNumber = totalSentNumber + totalAcceptedNumber;

    return { totalSentNumber, totalAcceptedNumber, totalInvitesNumber };
  }, [modifiedUsers]);

  return (
    <div className="p-3 bg-background-100 rounded-md shadow">
      <p className="text-base font-medium text-text-400">Total Invites</p>
      <div className="flex gap-2 justify-between items-center">
        <div className="flex-[2]">
          <div className="flex gap-2">
            {/* <p className="font-bold text-2xl text-text-100">5687</p> */}
            <AnimatedCounter
              className="!font-bold !text-2xl !text-text-100"
              initialValue={0}
              targetValue={totalInvitesValues.totalInvitesNumber}
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
          <InvitesIcon />
        </div>
      </div>

      <div className="flex gap-3 divide-x-2 pt-2">
        <p className="flex gap-2 w-[75px]">
          <span className="text-text-400 text-sm font-medium">Sent: </span>
          {/* <span className="text-text-100 text-sm font-bold">3257</span> */}
          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalInvitesValues.totalSentNumber}
          />
        </p>
        <p className="flex gap-2">
          <span className="text-text-400 text-sm font-medium ml-3">
            Accepted:{" "}
          </span>
          {/* <span className="text-text-100 text-sm font-bold">1987</span> */}
          <span>

          <AnimatedCounter
            className="!text-text-100 !text-sm !font-bold"
            initialValue={0}
            targetValue={totalInvitesValues.totalAcceptedNumber}
            />
            </span>
        </p>
      </div>
    </div>
  );
};

export default InvitesComp;
