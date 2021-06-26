import styles from './Card.module.scss';

import React from 'react';

function Card({ id, title, price, imageUrl, onPlus, onFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          onClick={onClickFavorite}
          alt="unliked"
        />
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
