import TransactionItem from "@/components/transaction/TransactionItem";
import { transactionItems } from "@/lib/helpers";

export default function Transactions() {
  return (
    <div className="bg-[#F5F7FA] px-6 py-6 md:px-8">
      <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-white px-6 py-5">
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
    </div>
  );
}
