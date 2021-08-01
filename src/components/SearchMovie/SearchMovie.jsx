/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiSearchMovie } from '../../utils/routes';
import style from './searchMovie.module.scss';
import CustomLoading from '../CustomLoading/CustomLoading';
const SearchMovie = (props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const searchListMovies = (res) => {
    dispatch({
      type: types.getTrendingMoviesSuccess,
      payload: res.results,
      allPayload: res,
    });
  };

  const handleInputValue = (e) => {
    setLoading(true);
    setInputValue(e?.target?.value);
    if (e?.target?.value?.length !== 0) {
      apiSearchMovie({
        find: e?.target?.value,
      }).then((res) => {
        setLoading(false);
        return searchListMovies(res);
      });
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <CustomLoading />}
      <div className={style['search-movie-input']}>
        <input
          data-testid="search-movie"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Buscar una pelicula"
        />
      </div>
    </>
  );
};

SearchMovie.propTypes = {};

export default SearchMovie;
