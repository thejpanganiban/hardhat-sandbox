import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    let deleteOnClick = () => {
        deleteInvoice(invoice.number)
        navigate("/invoices" + location.search);
    }

    return (
        <main>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button onClick={deleteOnClick}>Delete</button>
            </p>
        </main>
    );
}