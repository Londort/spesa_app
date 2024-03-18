import React from 'react';

const Category = (props) => {
  console.log(props);
  const { name } = props.data;
  return (
    <section className="categorySection">
      <div className="category_title">{name}</div>
    </section>
  );
};

export default Category;
