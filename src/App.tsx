import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContextProvider } from "./TransactionContext";

 function App() {

  const [isNewTrasactionModal, setIsNewTrasactionModal] = useState(false)

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModal(false)
  }

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModal(true)
  }

  return (
    <TransactionsContextProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <NewTransactionModal 
        isOpen={isNewTrasactionModal}
        onRequestClose={handleCloseNewTrasactionModal}
      />
      <Dashboard />
    </TransactionsContextProvider>
  );
}

export default App;
