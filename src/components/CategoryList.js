import React, { useState } from 'react';
import Category from './Category';
import LocalStorage from '../handlers/LocalStorage';

const CategoryList = () => {
  const categories = LocalStorage.getCategories('SpesApp');
  if (!categories) {
    LocalStorage.setCategories();
  }

  const [categoryList, setCategoryList] = useState(categories);

  return (
    <div className="categoryList">
      {categoryList &&
        categoryList.map((category) => {
          return <Category key={category.id} data={category} />;
        })}
    </div>
  );
};

export default CategoryList;
