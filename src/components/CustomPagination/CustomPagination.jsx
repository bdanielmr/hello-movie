/* eslint-disable no-unused-expressions */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { memo, useContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store/StoreProvider';
import { types } from '../../store/storeReducer';
import { apiGetMoviesPage } from '../../utils/routes';
import styles from './customPagination.module.scss';
import CustomLoading from '../CustomLoading/CustomLoading';
const CustomPagination = memo(({ start, end, pagina = 'index1' }) => {
  const descRef = useRef();
  const [store, dispatch] = useContext(StoreContext);
  const { movie, listMovies, listMoviesError, paginationList } = store;

  const [arrowLeft, setArrowLeft] = useState(0);
  const [arrowRigth, setArrowRigth] = useState(10);
  const [colorFocus, setColorFocus] = useState(pagina);
  const [putLoading, setPutLoading] = useState(false);
  const [putResPage, setPutResPage] = useState(paginationList?.page);

  const handleMorePage = () => {
    if (putResPage < end) {
      setPutResPage(putResPage + 1);
      setPutLoading(true);
      handleFocus(
        { target: { value: putResPage + 1 } },
        `index${putResPage + 1}`
      );
    }
  };
  const handleMinusPage = () => {
    if (putResPage > 1) {
      setPutResPage(putResPage - 1);
      setPutLoading(true);

      handleFocus(
        { target: { value: putResPage - 1 } },
        `index${putResPage - 1}`
      );
    }
  };
  const updateListMovies = (res, component, find) => {
    dispatch({
      type: types.getTrendingMoviesSuccess,
      payload: res.results,
      allPayload: { ...res, component, find },
    });
  };
  const handleFocus = (e, id) => {
    setPutLoading(true);

    setColorFocus(id);
    apiGetMoviesPage({
      page: e.target.value,
      component: paginationList?.component ? 'search' : '',
      find: paginationList?.find ? paginationList?.find : '',
    }).then((res) => {
      setPutLoading(false);
      setPutResPage(res?.page);
      return updateListMovies(
        res,
        paginationList?.component ? 'search' : '',
        paginationList?.find ? paginationList?.find : ''
      );
    });
  };
  const handleBlur = (e, id) => {};
  useEffect(() => {
    setColorFocus('index1');
    setPutResPage(1);
  }, [end]);
  return (
    <>
      {putLoading && <CustomLoading />}
      {end > 1 && (
        <>
          <div
            className={styles['custom-pagination-arrow-body']}
            onClick={handleMinusPage}
          >
            <a className={styles['custom-pagination-arrow']}>{'<'}</a>
          </div>
          <div className={styles['custom-pagination-body']}>
            {Array.from(Array(end + 1).keys())
              .slice(
                putResPage <= 10 ? 1 : putResPage - 9,
                putResPage < 10 ? 11 : putResPage + 1
              )
              .map((pagination, i) => {
                const ID = 'index' + pagination;
                return (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '30px',
                      height: '30px',
                      margin: '0px 10px',
                    }}
                    key={i}
                  >
                    <input
                      type="text"
                      readOnly
                      ref={descRef}
                      key={ID}
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
                      value={pagination}
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
      )}
    </>
  );
});

CustomPagination.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  pagina: PropTypes.string,
};

export default CustomPagination;
