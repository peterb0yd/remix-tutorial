import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export default function Add() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}