// src/components/ExpenseSummary.tsx
import React from 'react';
import { Expense } from '../types';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
