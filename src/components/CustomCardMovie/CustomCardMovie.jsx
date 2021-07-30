/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import style from './customCardMovie.module.scss';
const CustomCardMovie = (props) => {
  return (
    <a href="" className={style.card}>
      <img
        src="https://i.imgur.com/oYiTqum.jpg"
        className={style.card__image}
        alt=""
      />
      <div className={style.card__overlay}>
        <div className={style.card__header}>
          <svg className={style.card__arc} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className={style['card__header-text']}>
            <h3 className={style.card__title}>Jessica Parker</h3>
            <span className={style.card__status}>1 hour ago</span>
          </div>
        </div>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  );
};

CustomCardMovie.propTypes = {};

export default CustomCardMovie;
