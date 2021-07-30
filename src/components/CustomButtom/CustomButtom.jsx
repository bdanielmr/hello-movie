import React from 'react';
import PropTypes from 'prop-types';
import style from './customButtom.module.scss';
const CustomButtom = ({ history, label }) => {
  console.log('histor', history);
  const onclickButtom = () => {
    history.push({
      pathname: '/home',
    });
  };
  return (
    <div className={style['custom-buttom']}>
      <button onClick={onclickButtom}>{label}</button>
    </div>
  );
};

CustomButtom.propTypes = {
  label: PropTypes.string,
  history: PropTypes.object,
};

export default CustomButtom;
