/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './customCardMovie.module.scss';
import { Link, useLocation } from 'react-router-dom';
const CustomCardMovie = memo(
  ({ id, title, languaje, poster, rating, description }) => {
    const location = useLocation();
    return (
      <div className={style.card}>
        <Link
          key={id}
          to={{
            pathname: `/movie/${id}`,
            state: { background: location },
          }}
        >
          <img
            src={
              typeof poster === 'undefined'
                ? ''
                : `https://image.tmdb.org/t/p/original${poster}`
            }
            className={style.card__image}
            alt=""
          />
          <div className={style.card__overlay}>
            <div className={style.card__header}>
              <svg
                className={style.card__arc}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path />
              </svg>
              <div className={style['card__header-text']}>
                <h3 className={style.card__title}>{title}</h3>
                <span className={style.card__status}>{rating}</span>
              </div>
              <p className={style.card__languaje}>
                {'Idioma original:' + languaje}
              </p>
            </div>
            <p className={style.card__description}>
              {description?.slice(0, 200) +
                (description?.length > 200 ? '...' : '')}
            </p>
          </div>
        </Link>
      </div>
    );
  }
);

CustomCardMovie.propTypes = {
  title: PropTypes.string,
  languaje: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.any,
};

export default CustomCardMovie;
