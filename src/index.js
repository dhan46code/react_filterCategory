import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Menu from './Menu';
import Category from './Category';
import { data } from './data';

// duplicate category
const ButtonCategory = ['All', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuList, SetMenuList] = useState(data);
  const [category, setCategory] = useState(ButtonCategory);

  const filterCategory = (category) => {
    const newCategory = data.filter(
      (categoryList) => categoryList.category === category
    );
    // but if category same with all please add all original array
    if (category === 'All') {
      return SetMenuList(data);
    }
    // update new menuList use newCategory
    SetMenuList(newCategory);
  };
  return (
    <main>
      <div className='container'>
        <div className='title'>
          <h2>linux desktop environment</h2>
        </div>
        <div className='menu'>
          <Category filterCategory={filterCategory} category={category} />
          <Menu menuList={menuList} />
        </div>
      </div>
    </main>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
