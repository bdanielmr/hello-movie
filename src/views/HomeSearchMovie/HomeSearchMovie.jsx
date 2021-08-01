/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import CustomTopList from '../../components/CustomTopList/CustomTopList';
import style from './homeSearchMovie.module.scss';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import { StoreContext } from '../../store/StoreProvider';
const HomeSearchMovie = (props) => {
  const [store] = useContext(StoreContext);
  const { paginationList } = store;

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
