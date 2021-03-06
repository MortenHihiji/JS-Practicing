import React from 'react';
import AppContext from '../context';

const Info = ({ title, image, description, isOrderComplete, setIsOrderComplete }) => {
  const { setCartOpened } = React.useContext(AppContext);

  const handleOrderClick = () => {
    if (isOrderComplete) {
      setIsOrderComplete(false);
    }
    setCartOpened(false);
  };

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120" src={image} alt="Bin" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={handleOrderClick} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
