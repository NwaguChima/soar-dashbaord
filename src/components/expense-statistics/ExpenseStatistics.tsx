import React from "react";
import PieChartItem from "../pie-chart/PieChart";

interface ExpenseStatisticsProps {}

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[22px] text-base font-semibold">
        Expense Statistics
      </h3>

      <div className="h-[322px] w-full rounded-3xl bg-white">
        <PieChartItem />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
