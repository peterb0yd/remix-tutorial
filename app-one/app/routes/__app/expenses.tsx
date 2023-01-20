import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

import expensesStyles from "~/styles/expenses.css";

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

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={EXPENSES} />
      </main>
    </>
  );
}

export const links = () => [
  { rel: "stylesheet", href: expensesStyles },
];