import React from 'react'

import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Skeleton';
import Sort from '../components/Sort';

function Home() {

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6310817d826b98071a4320b1.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Pizza key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

export default Home;