import React from 'react';

const List = ({id, name, image, age, onDelete}) => {
  return (
    <article key={id} className="person">
      <img src={image}  alt={name}/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <button onClick={() => onDelete(id)} className="btn-delete">remove</button>
    </article>
  );
};

export default List;
