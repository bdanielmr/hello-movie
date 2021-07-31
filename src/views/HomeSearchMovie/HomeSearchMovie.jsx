/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchMovie from '../../components/SearchMovie/SearchMovie';
import CustomTopList from '../../components/CustomTopList/CustomTopList';
import style from './homeSearchMovie.module.scss';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
const HomeSearchMovie = (props) => {
  const [store, dispatch] = useContext(StoreContext);
  const { paginationList } = store;
  console.log('PAGONATION', paginationList);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '80%',
            height: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '75px',
              position: 'fixed',
              top: 55,
              bottom: 0,
              zIndex: '9999',
              marginTop: '0px',
              marginBottom: '10px',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchMovie />
          </div>
          <div
            style={{
              width: '70%',
              marginTop: '150px',
            }}
          >
            <CustomTopList />
          </div>
          <div
            style={{
              display: 'flex',
              height: '80px',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            {!!paginationList && (
              <CustomPagination
                star={paginationList?.page}
                end={paginationList?.total_pages}
              />
            )}
          </div>
        </div>
      </div>
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          height: '30px',
          width: '100%',
          background: 'rgba(3, 37, 65, 1)',
          zIndex: '9999',
        }}
      >
        hola
      </footer>
    </>
  );
};

HomeSearchMovie.propTypes = {};

export default HomeSearchMovie;
