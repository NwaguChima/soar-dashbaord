import BalanceHistory from "@/components/balance-history/BalanceHistory";
import Cards from "@/components/cards/Cards";
import ExpenseStatistics from "@/components/expense-statistics/ExpenseStatistics";
import Transactions from "@/components/transaction/Transactions";
import WeeklyActivities from "@/components/weekly-activities/WeeklyActivities";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 text-[#343C6A]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
        <Cards />
        <Transactions />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
        <WeeklyActivities />
        <ExpenseStatistics />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr]">
        <ExpenseStatistics />
        <BalanceHistory />
      </div>
    </div>
  );
}
