import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import Http404 from './routes/http404';
import InvoicesIndex from './routes/invoices_index';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<InvoicesIndex />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} /> 
        <Route path="*" element={<Http404 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();