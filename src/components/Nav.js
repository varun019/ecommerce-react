import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const [isLogin, setIsLogin] = useState(false);
    const isLoggedin = JSON.parse(localStorage.getItem('register_user')) ?? [];
  const navigate = useNavigate();

  useEffect(() => {
    const userlog = isLoggedin.find((text) => text.isLogin === true);
    if (userlog) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  },[]);


  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("register_user"))
    const newUserData = userData.map((user) => {
      if (user.isLogin === true) {
        return {
          ...user,
          isLogin: false
        }
      }
      return user;
    });
    setIsLogin(false);
    localStorage.setItem('register_user', JSON.stringify(newUserData));
    navigate('/');
  }
  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
        }

        .btn-log{
          border: none;
          background: none;
          font-size: large;
          color: royalblue;
          font-weight: 500;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 2.5rem;
      }

    .cart-total--item {
    width: 1.5rem;
    height: 2rem;
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 50%;
    display: grid;
    place-items: center;
    top: -20%;
    left: 70%;
    font-size: small;
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .logbtn{
      text-decoration: none;
      padding: 1rem 2.4rem;
      border: none;
      background: none;
      color: #1570fd;
      padding-left: 0rem;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      font-size: 1.8rem;
      font-weight: 500;
      justify-content: space-between;
      display: flex;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        
        .navbar-link,.btn-log {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  if (menuIcon) {
    document.body.classList.add('sidebar-open');
  }
  else {
    document.body.classList.remove('sidebar-open');
  }

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="navbar-link "
            >
              {isLogin
                ? <button className='btn-log' onClick={handleLogout}>LOGOUT</button>
                : <button className='btn-log' onClick={() => localStorage.setItem('isLoggedIn', true)}>
                  LOGIN
                </button>
              }
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />

          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
