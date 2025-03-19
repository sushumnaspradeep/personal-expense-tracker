import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (description: string, amount: number, category: string) => {
    setExpenses([...expenses, { id: expenses.length + 1, description, amount, category }]);
  };

  return (
    <div>
      <h1>Personal Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={() => {}} />
    </div>
  );
};

export default App;
