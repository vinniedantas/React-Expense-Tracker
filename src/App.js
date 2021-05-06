import React from "react";
import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
