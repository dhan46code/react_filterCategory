import React from 'react';

const Category = ({ filterCategory, category }) => {
  return (
    <div className='category-btn'>
      {category.map((categoryBtn, index) => {
        return (
          <button
            className='btn'
            onClick={() => filterCategory(categoryBtn)}
            key={index}
          >
            {categoryBtn}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
