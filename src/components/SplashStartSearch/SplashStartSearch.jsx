/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/hellomovielogo.svg';
import CustomButtom from '../CustomButtom/CustomButtom';
import style from './splashStartSearch.module.scss';
const SplashStartSearch = ({ history }) => {
  return (
    <div className={style['splash-background']}>
      <img width="250px" height="50px" src={logo} />
      <h2 className={style['splash-text-h2']}>Bienvenidos.</h2>
      <h3 className={style['splash-text-h3']}>
        Millones de películas, programas de televisión y personas por descubrir.
      </h3>
      <CustomButtom history={history} label="Explora ahora" />
    </div>
  );
};

SplashStartSearch.propTypes = {
  history: PropTypes.object,
};

export default SplashStartSearch;
