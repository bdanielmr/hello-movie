/* eslint-disable no-unused-expressions */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { memo, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiGetMoviesPage } from '../../utils/routes';
import styles from './customPagination.module.scss';
import CustomLoading from '../CustomLoading/CustomLoading';
const CustomPagination = memo(({ start, end }) => {
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;

  const [arrowLeft, setArrowLeft] = useState(0);
  const [arrowRigth, setArrowRigth] = useState(10);
  const [colorFocus, setColorFocus] = useState('index0');
  const [putLoading, setPutLoading] = useState(false);
  console.log('ver PUT LOADING', putLoading);
  const handleMorePage = () => {
    if (arrowRigth < end) {
      setArrowLeft(arrowLeft + 1);
      setArrowRigth(arrowRigth + 1);
    }
  };
  const handleMinusPage = () => {
    if (arrowLeft > 0) {
      setArrowLeft(arrowLeft - 1);
      setArrowRigth(arrowRigth - 1);
    }
  };
  const updateListMovies = (res) => {
    dispatch({
      type: types.getTrendingMoviesSuccess,
      payload: res.results,
      allPayload: res,
    });
  };
  const handleFocus = (e, id) => {
    setPutLoading(true);
    setColorFocus(id);
    apiGetMoviesPage({
      page: e.target.value,
    }).then((res) => {
      setPutLoading(false);
      console.log('cer rRESPONSE', res);
      return updateListMovies(res);
    });
  };
  const handleBlur = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {putLoading && <CustomLoading />}
      <div
        className={styles['custom-pagination-arrow-body']}
        onClick={handleMinusPage}
      >
        <a className={styles['custom-pagination-arrow']}>{'<'}</a>
      </div>
      <div className={styles['custom-pagination-body']}>
        {Array.from(Array(end).keys())
          .slice(arrowLeft, arrowRigth)
          .map((pagination, i) => {
            const ID = 'index' + i;
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30px',
                  height: '30px',
                }}
                key={i}
              >
                <input
                  type="text"
                  readOnly
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    border: colorFocus === ID ? '1px solid black' : '',
                    width: colorFocus === ID ? '30px' : '30px',
                    height: colorFocus === ID ? '30px' : '30px',
                    background:
                      colorFocus === ID
                        ? 'linear-gradient(to right, #1ed5a9 0%, #01b4e4 100%)'
                        : '',
                    borderRadius: colorFocus === ID ? '50%' : '',
                    cursor: 'pointer',
                  }}
                  onChange={() => console.log('onChange')}
                  onFocus={(e) => handleFocus(e, ID)}
                  onBlur={(e) => handleBlur(e, ID)}
                  value={pagination + 1}
                />
              </div>
            );
          })}
      </div>
      <div
        className={styles['custom-pagination-arrow-body']}
        onClick={handleMorePage}
      >
        <a className={styles['custom-pagination-arrow']}>{'>'}</a>
      </div>
    </>
  );
});

CustomPagination.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
};

export default CustomPagination;
