import styles from './Card.module.scss';

import React from 'react';

function Card({ title, price, imageUrl, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img
            src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
            onClick={onClickPlus}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
