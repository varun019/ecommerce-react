import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({amount,setDecrease,setIncrease})=>{
    return(
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={()=>setDecrease()}><FaMinus id="minus"/></button>
                <p className="amount-style mb-0">
                    {amount}
                </p>
                <button onClick={()=>setIncrease()}><FaPlus id="plus"/></button>
            </div>
        </div>
    )
}

export default CartAmountToggle;