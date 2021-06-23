import React from 'react';
// import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60d381ab61160900173c93d9.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
    // axios.get('https://60d381ab61160900173c93d9.mockapi.io/items').then(({ data }) => {
    //   setItems(data);
    // });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items &&
            items.map((item) => (
              <Card
                key={item.imageUrl}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
