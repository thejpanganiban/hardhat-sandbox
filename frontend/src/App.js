import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 style={{ padding: "0 1rem 0 1rem" }}>Bookkeeper!</h1>
      <nav style={{ borderBottom: "solid 1px", padding: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/box">Box</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
