import React, { useState } from 'react';
import { DataPoint } from './DataPoint';
import { ColumnChart } from './ColumnChart';
import './App.css';

const initialMonthlySpending: Array<DataPoint> = [
  { name: 'Food & Dining', y: 22 },
  { name: 'Health Insurance', y: 18 },
  { name: 'Miscellaneous', y: 32 },
  { name: 'Travel & Shopping', y: 16 },
];

const categoryIds = ['food', 'health', 'misc', 'travel'];

export const App = () => {
  const monthlySpending = initialMonthlySpending

  return (
    <main className="app">
      <div className="chart">
        <ColumnChart
          title="Top spending categories"
          totalLabel="$ per month"
          data={monthlySpending}
        />
      </div>
    </main>
  );
};
