import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cart_context";

const AddtoCart = ({ product }) => {

  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1)

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle mb-2" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease} />

      <NavLink to='' onClick={() => addToCart(id, color, amount, product)}>
        <button className='btn'>Add to Cart</button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btn{
    margin:10px;
    text-decoration: none;
    font-size:1.5rem;
    background-color: rgb(98, 84, 243);
    color: rgb(255, 255, 255);
    padding: 1.4rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddtoCart;