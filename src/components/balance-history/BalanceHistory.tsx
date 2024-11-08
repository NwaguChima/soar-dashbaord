import React from "react";
import LineChart from "../line-chart/LineChart";

const BalanceHistory: React.FC = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] text-base font-semibold">Balance History</h3>

      <div className="h-[322px] w-full rounded-3xl bg-white p-6 text-[#718EBF]">
        <LineChart />
      </div>
    </div>
  );
};

export default BalanceHistory;
