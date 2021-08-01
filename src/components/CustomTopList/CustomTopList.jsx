/* eslint-disable react/display-name */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { memo, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import style from './customTopList.module.scss';
import CustomCardMovie from '../CustomCardMovie/CustomCardMovie';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiGetMovies } from '../../utils/routes';
import { useFetch } from '../../hooks/useFetch';
import CustomLoading from '../CustomLoading/CustomLoading';
import CustomAlert from '../CustomAlert/CustomAlert';
const CustomTopList = memo((props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;
  const { data: getList, loading } = useFetch(apiGetMovies);

  const getListMovies = () => {
    dispatch({
      type: types.getTrendingMoviesSuccess,
      payload: getList.results,
      allPayload: getList,
    });
  };
  const getErrorMovies = () => {
    dispatch({
      type: types.getTrendingMoviesError,
      payload: getList,
    });
  };
  useEffect(() => {
    if (getList.results) {
      getListMovies();
    } else if (!getList.success) {
      getErrorMovies();
    }
  }, [getList]);
  return (
    <div className={style.cards}>
      {typeof listMovies === 'undefined' && (
        <CustomAlert error={listMoviesError} />
      )}
      {loading ? (
        <CustomLoading />
      ) : listMovies?.length === 0 ? (
        <CustomAlert error={listMoviesError} />
      ) : (
        listMovies?.map((pel, i) => {
          return (
            <CustomCardMovie
              key={i}
              id={pel?.id}
              title={
                pel?.original_title ? pel?.original_title : pel?.original_name
              }
              description={pel?.overview}
              languaje={pel?.original_language}
              poster={pel?.poster_path}
              rating={pel?.vote_average}
            />
          );
        })
      )}
    </div>
  );
});

CustomTopList.propTypes = {};

export default CustomTopList;
