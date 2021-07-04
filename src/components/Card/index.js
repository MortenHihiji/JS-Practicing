import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import React from 'react';

function Card({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={188}
          viewBox="0 0 155 188"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="10" rx="10" ry="10" width="155" height="91" />
          <rect x="0" y="112" rx="3" ry="3" width="155" height="15" />
          <rect x="0" y="133" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="160" rx="10" ry="10" width="80" height="24" />
          <rect x="100" y="155" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite}>
              <img
                src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
                onClick={onClickFavorite}
                alt="unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                onClick={onClickPlus}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
