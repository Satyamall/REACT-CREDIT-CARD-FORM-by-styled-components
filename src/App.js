
import './App.css';
import CreditCard from './CreditCard/CreditCard';
import Form from './Form/Form';

function App() {
  return (
    <div className="App">
      <h1>REACT CREDIT CARD FORM</h1>
      <div className="card">
        <CreditCard />
        <Form />
      </div>
    </div>
  );
}

export default App;
