/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import CustomTopList from '../../components/CustomTopList/CustomTopList';
import style from './homeSearchMovie.module.scss';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import { StoreContext } from '../../store/StoreProvider';
import { useHistory } from 'react-router-dom';
const HomeSearchMovie = (props) => {
  const [store] = useContext(StoreContext);
  const { listMovies, paginationList } = store;
  const history = useHistory();
  console.log('ver pagination los', paginationList);
  useEffect(() => {
    const params = new URLSearchParams();
    if (
      paginationList &&
      paginationList?.page > 1 &&
      paginationList.component !== 'search'
    ) {
      params.append('trending', paginationList?.page);
    } else if (
      paginationList &&
      paginationList?.page > 1 &&
      paginationList.component === 'search'
    ) {
      params.append('search', paginationList?.find);
      params.append('page', paginationList?.page);
    } else {
      params.delete('trending');
      params.delete('search');
      params.delete('page');
    }
    history.push({ search: params.toString() });
  }, [paginationList, history]);

  return (
    <>
      <div className={style['home-search-movie']}>
        <div className={style['home-search-movie-body']}>
          <div className={style['home-search-movie-body-search-component']}>
            <SearchMovie />
          </div>
          <div className={style['home-search-movie-body-list-component']}>
            <CustomTopList />
          </div>
          <div className={style['home-search-movie-body-pagination-component']}>
            {!!paginationList && (
              <CustomPagination
                star={paginationList?.page}
                end={paginationList?.total_pages}
              />
            )}
          </div>
        </div>
      </div>
      <footer className={style['home-search-movie-footer']}>
        @bdanielmr - themoviedb.
      </footer>
    </>
  );
};

HomeSearchMovie.propTypes = {};

export default HomeSearchMovie;
