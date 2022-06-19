import TestItem from './components/Test/TestItem';
import NewExpanse from './components/NewExpanse/NewExpanse';
import Expanses from './components/Expenses/Expanses';
import Exptest from './components/Test/Exptest';
import  './styles/index.css';
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h1>Lets get started with React JS</h1>
      <NewExpanse></NewExpanse>
      <Expanses item={expenses}></Expanses>
      <TestItem></TestItem>
      <Exptest></Exptest>
    </div>
  );
}

export default App;