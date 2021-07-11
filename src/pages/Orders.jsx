import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { history } = React.useContext(AppContext);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://60d381ab61160900173c93d9.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {isLoading ? (
          [...Array(8)].map((item, index) => <Card key={index} loading={isLoading} {...item} />)
        ) : orders.length > 0 ? (
          orders.map((item, index) => <Card key={index} loading={isLoading} {...item} />)
        ) : (
          <div className="emptyItems d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="70" height="70" src="/img/smileys/1.svg" alt="Smile" />
            <h2>У вас нет заказов</h2>
            <p className="opacity-6">Оформите хотя бы один заказ.</p>
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

export default Orders;
