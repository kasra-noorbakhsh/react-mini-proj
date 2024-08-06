import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StockAddForm } from '../../Components/StockAddForm/StockAddForm'

import './AddStockPage.css'

const AddStockPage = () => {
    return (
        <div className="add-stock-page">
            <ToastContainer />
            <StockAddForm />
        </div>
    )
}

export default AddStockPage
