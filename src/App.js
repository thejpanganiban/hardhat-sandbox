import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Hardhat Sandbox</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/hello">Hello</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
