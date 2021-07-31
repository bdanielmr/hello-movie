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
const CustomTopList = memo((props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;
  const { data: getList, loading } = useFetch(apiGetMovies);

  const [movieInfo, setMovieInfo] = useState({
    id: null,
    title: null,
    idioma: null,
    description: null,
  });

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
  console.log('ver list', getList);
  console.log('ver listMovies', listMovies);
  console.log('ver listMovies error', listMoviesError);
  const pelis = [
    {
      id: 0,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 1,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 3,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 4,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 5,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 6,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 7,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 8,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 6,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 7,
      name: 'daniel',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
    {
      id: 8,
      name: 'bryan',
      info: 'asdkansdkajsdaskdjasdasdjasdasjdasjkbashfjafjasfajsdfsdfdsjhfjsdffsdfs',
    },
  ];
  return (
    <div className={style.cards}>
      {loading ? (
        'loading'
      ) : typeof listMovies === 'undefined' ? (
        <p>nada</p>
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
