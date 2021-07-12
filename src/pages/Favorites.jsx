import React from 'react';

import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {
  const { favorites, onAddToFavorite, history } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      {favorites.length > 0 ? (
        <div className="d-flex justify-between align-center mb-40">
          <h1>Мои закладки</h1>
        </div>
      ) : (
        ''
      )}

      <div className="d-flex flex-wrap">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <Card key={item.id} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))
        ) : (
          <div className="emptyItems d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="70" height="70" src="/img/smileys/2.svg" alt="Smile" />
            <h2>Закладок нет :(</h2>
            <p className="opacity-6">Вы ничего не добавляли в закладки.</p>
            <button onClick={() => history.push('/')} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
