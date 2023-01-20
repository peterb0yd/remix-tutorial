import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

const EXPENSES = [
  {
    id: 1,
    title: 'New Website',
    amount: 294.67,
    date: new Date(2021, 5, 28).toISOString(),
  },
  {
    id: 2,
    title: 'Car Insurance',
    amount: 231.67,
    date: new Date(2021, 2, 28).toISOString(),
  }
]

export default function Analysis() {
  return (
    <div>
      <Chart expenses={EXPENSES} />
      <ExpenseStatistics expenses={EXPENSES} />
    </div>
  );
}