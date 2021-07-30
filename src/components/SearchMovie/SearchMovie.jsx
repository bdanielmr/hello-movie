/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import style from './searchMovie.module.scss';
const SearchMovie = (props) => {
  return (
    <div className={style['search-movie-input']}>
      <input placeholder="Buscar una pelicula" />
    </div>
  );
};

SearchMovie.propTypes = {};

export default SearchMovie;
