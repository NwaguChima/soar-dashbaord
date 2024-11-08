import React from "react";
import TransactionItem from "./TransactionItem";
import { transactionItems } from "@/lib/helpers";

const Transactions: React.FC = ({}) => {
  return (
    <section className="flex min-w-[350px] flex-col gap-4">
      <h3 className="text-[22px] text-base font-semibold">
        Recent Transactions
      </h3>
      <div className="flex h-min flex-1 flex-col gap-3 rounded-3xl bg-white px-6 py-6">
        {transactionItems.map((item) => (
          <TransactionItem
            key={item.id}
            date={item.date}
            amount={item.amount}
            trend={item.trend}
            description={item.description}
            icon={<item.icon />}
            background={item.background}
          />
        ))}
      </div>
    </section>
  );
};

export default Transactions;
