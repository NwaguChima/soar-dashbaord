import { Trend } from "@/lib/types";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface TransactionItemProps {
  icon: React.ReactNode;
  date: string;
  description: string;
  amount: string;
  trend: Trend;
  background: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  icon,
  date,
  description,
  amount,
  trend,
  background,
}) => {
  const isNegative = trend === "negative";

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-[55px] w-[55px] items-center justify-center rounded-full`}
          style={{ backgroundColor: background }}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-[#232323] md:text-base">
            {description}
          </p>
          <small className="text-sm text-[#718EBF] md:text-base">{date}</small>
        </div>
      </div>
      <p
        className={cn(
          "text-xs font-medium md:text-base",
          isNegative ? "text-[#FF4B4A]" : "text-[#41D4A8]",
        )}
      >
        {isNegative ? "-" : "+"}${amount}
      </p>
    </div>
  );
};

export default TransactionItem;
