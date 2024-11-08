import React from "react";
import BarChartItem from "../bar-chart/BarChart";

interface WeeklyActivitiesProps {}

const WeeklyActivities: React.FC<WeeklyActivitiesProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] text-base font-semibold">Weekly Activity</h3>

      <div className="h-[322px] w-full rounded-3xl bg-white p-6 text-[#718EBF]">
        <div className="flex items-center justify-end gap-5">
          <div className="flex items-center gap-2">
            <span className="h-[15px] w-[15px] rounded-full bg-[#396AFF]"></span>
            <p>Deposit</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[15px] w-[15px] rounded-full bg-[#232323]"></span>
            <p>Withdraw</p>
          </div>
        </div>
        <div className="mt-6">
          <BarChartItem />
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivities;
