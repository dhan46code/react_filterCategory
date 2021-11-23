import React from 'react';

const Menu = ({ menuList }) => {
  return (
    <div className='menu-parent'>
      <>
        {menuList.map((menu) => {
          const { id, category, name, img } = menu;
          return (
            <a href={img} key={id}>
              <article className='menu-list'>
                <img src={img} alt='' />
                <header>
                  <h4>{name}</h4>
                  <h4 className='category'>{category}</h4>
                </header>
              </article>
            </a>
          );
        })}
      </>
    </div>
  );
};

export default Menu;
