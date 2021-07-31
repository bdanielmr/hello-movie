/* eslint-disable no-unused-expressions */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { memo, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiGetMoviesPage } from '../../utils/routes';
import { useFetch } from '../../hooks/useFetch';
const CustomPagination = memo(({ start, end }) => {
  console.log('RECIVIENDO END', end);
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError } = store;

  const [arrowLeft, setArrowLeft] = useState(0);
  const [arrowRigth, setArrowRigth] = useState(10);
  const [colorFocus, setColorFocus] = useState('index0');
  const [getValue, setValue] = useState(1);
  const [getValueFocus, setValueFocus] = useState('');
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
    setColorFocus(id);
    apiGetMoviesPage({
      page: e.target.value,
    }).then((res) => updateListMovies(res));
    console.log('bver focus', e.target.value);
  };
  const handleBlur = (e) => {
    console.log(e.target.value);
  };
  console.log('ver onfocus list', getValueFocus);
  return (
    <>
      <div
        style={{
          margin: '0px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30px',
          height: '30px',
          border: '1px solid black',
        }}
        onClick={handleMinusPage}
      >
        <a style={{ color: 'black' }}>{'<'}</a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
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
                  }}
                  onChange={() => alert('cambiando')}
                  onFocus={(e) => handleFocus(e, ID)}
                  onBlur={(e) => handleBlur(e, ID)}
                  value={pagination + 1}
                />
              </div>
            );
          })}
      </div>
      <div
        style={{
          margin: '0px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30px',
          height: '30px',
          border: '1px solid black',
        }}
        onClick={handleMorePage}
      >
        <a style={{ color: 'black' }}>{'>'}</a>
      </div>
    </>
  );
});

CustomPagination.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
};

export default CustomPagination;
