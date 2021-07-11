import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header({ onClickCart, onCartRef, isIcon }) {
  const { totalPrice } = useCart();

  //   const handleIconChange = () => window.location.pathname;

  //   window.a = handleIconChange();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img height={40} width={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex headerLinks">
        <li ref={onCartRef} onClick={onClickCart} className="d-flex mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="cu-p">
            <img
              width={18}
              height={18}
              src={isIcon === '/favorites' ? '/img/heart-active.svg' : '/img/heart.svg'}
              alt="heart"
            />
          </li>
        </Link>
        <Link to="/orders">
          <li>
            <img
              width={18}
              height={18}
              src={isIcon === '/orders' ? '/img/user-active.svg' : '/img/user.svg'}
              alt="user"
            />
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
