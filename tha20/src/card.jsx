import React from 'react';

const Card = ({ items, state, setState }) => {

  let handleClick = () => {
    let newState = state.filter((el) => el.id !== items.id)
    setState(newState)
  };

  return (
    <div className='data'>
      <h1>{items.title}</h1>
      <h3>
        {items.title} contains {items.cals} amount of calories{' '}
      </h3>
      <button className="delete" onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Card;