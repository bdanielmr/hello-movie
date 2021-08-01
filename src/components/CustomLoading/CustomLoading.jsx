/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './customLoading.module.scss';
const CustomLoading = (props) => {
  return (
    <div className={styles['custom-loading']}>
      <div className={styles['lds-ellipsis']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

CustomLoading.propTypes = {};

export default CustomLoading;
