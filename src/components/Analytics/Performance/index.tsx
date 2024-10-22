import { userListingDummyDataTypes } from "@/constants/data";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useMemo } from "react";
import ProgressBar from "./ProgressBar";
import AnimatedCounter from "../AnimatedCounter";

const Performance = ({
  modifiedUsers,
}: {
  modifiedUsers: userListingDummyDataTypes[];
}) => {
  console.log("Performance modifiedUsers", modifiedUsers);

  const totalPerformanceValues = useMemo(() => {
    const { totalPositiveNumber, totalNegativeNumber } = modifiedUsers.reduce(
      (acc, user) => {
        const { positive, negative } = user.performance;

        // Accumulate total positive and negative values
        acc.totalPositiveNumber += positive;
        acc.totalNegativeNumber += negative;

        return acc;
      },
      { totalPositiveNumber: 0, totalNegativeNumber: 0 }
    );

    const totalPerformance = totalPositiveNumber + totalNegativeNumber;
    const positivePercentage =
      totalPerformance > 0 ? (totalPositiveNumber / totalPerformance) * 100 : 0;

    return { totalPositiveNumber, totalNegativeNumber, positivePercentage };
  }, [modifiedUsers]);

  console.log("totalPerformanceValues", totalPerformanceValues);

  return (
    <div className="bg-blue-100 p-3  rounded-md shadow">
      <p className="text-background-100 font-semibold text-base">Performance</p>
      <div className="flex gap-2 items-center">
        <div>
          <ProgressBar value={totalPerformanceValues.positivePercentage} />
        </div>
        <div>
          <div>
            <div className="flex gap-1 items-center">
              <FaArrowUp className="text-green-600" />
              <p className="font-bold text-sm text-background-100">
                Positive ratings
              </p>
            </div>
            {/* <p className="font-bold text-2xl text-background-100">1025</p> */}
            <AnimatedCounter initialValue={0} targetValue={totalPerformanceValues.totalPositiveNumber} />
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <FaArrowDown className="text-red-600" />
              <p className="font-bold text-sm text-background-100">
                Negative ratings
              </p>
            </div>
            {/* <p className="font-bold text-2xl text-background-100">1025</p> */}
            <AnimatedCounter initialValue={0} targetValue={totalPerformanceValues.totalNegativeNumber} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
