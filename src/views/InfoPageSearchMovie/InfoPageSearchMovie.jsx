/* eslint-disable react/display-name */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import style from './infoPageSearchMovie.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { apiGetInfoMovie } from '../../utils/routes';
import { useFetch } from '../../hooks/useFetch';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
const InfoPageSearchMovie = memo(({ match }) => {
  const history = useHistory();
  const getParams = useParams();

  const { data: getList, loading } = useFetch(apiGetInfoMovie, getParams);

  return (
    <>
      {loading ? (
        <CustomLoading />
      ) : (
        <div className={style['info-page-search-movie-bodyguard']}>
          <div
            className={
              style[
                !match
                  ? 'info-page-search-movie-bodyguard-light'
                  : 'info-page-search-movie-bodyguard-bold'
              ]
            }
          >
            <div className={style.movie_card} id="bright">
              <div className={style.info_section}>
                <div className={style.movie_header}>
                  <p
                    className={style.movie_header_arrow}
                    onClick={() => history.push('/home')}
                  >
                    {'< Regresar'}
                  </p>
                  <img
                    className={style.locandina}
                    src={
                      typeof getList?.poster_path === 'undefined'
                        ? ''
                        : `https://image.tmdb.org/t/p/original${getList?.poster_path}`
                    }
                  />
                  <h1>{getList?.original_title}</h1>
                  <h4>{getList?.release_date?.slice(0, 4)}</h4>
                  <span className={style.minutes}>{getList?.runtime} min</span>
                  <p className={style.type}>
                    {getList?.genres?.map((gene, i) => {
                      return gene?.name + ' ';
                    })}
                  </p>
                </div>
                <div className={style.movie_desc}>
                  <p className={style.text}>{getList?.overview}</p>
                </div>
              </div>
              <div
                style={{
                  width: '95%',
                  background:
                    typeof getList?.poster_path === 'undefined'
                      ? ''
                      : `url(https://image.tmdb.org/t/p/w780${
                          getList?.backdrop_path
                            ? getList?.backdrop_path
                            : getList?.poster_path
                        })`,
                }}
                className={`${style['blur_back']}`}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

InfoPageSearchMovie.propTypes = {
  match: PropTypes.object,
};

export default InfoPageSearchMovie;
