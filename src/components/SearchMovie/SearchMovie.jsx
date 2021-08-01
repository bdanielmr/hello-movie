/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiSearchMovie } from '../../utils/routes';
import style from './searchMovie.module.scss';
const SearchMovie = (props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;

  const [inputValue, setInputValue] = useState('');

  const searchListMovies = (res) => {
    dispatch({
      type: types.getTrendingMoviesSuccess,
      payload: res.results,
      allPayload: res,
    });
  };

  const handleInputValue = (e) => {
    setInputValue(e?.target?.value);
    if (e?.target?.value?.length !== 0) {
      apiSearchMovie({
        find: e?.target?.value,
      }).then((res) => searchListMovies(res));
    }
  };
  return (
    <div className={style['search-movie-input']}>
      <input
        value={inputValue}
        onChange={handleInputValue}
        placeholder="Buscar una pelicula"
      />
    </div>
  );
};

SearchMovie.propTypes = {};

export default SearchMovie;
