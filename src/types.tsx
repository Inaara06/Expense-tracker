export interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
  }
  
  export type Category = 'Food' | 'Entertainment' | 'Utilities' | 'Other';
  