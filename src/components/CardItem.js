import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) { 
  return (
    <>
         {/* This is the structure of how the Card Items will appear, cards will have links,an image anditem information*/}
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Book'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;