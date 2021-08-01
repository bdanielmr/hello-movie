import React from 'react';
import PropTypes from 'prop-types';
import style from './customButtom.module.scss';
import { useHistory } from 'react-router-dom';
const CustomButtom = ({ label }) => {
  const history = useHistory();
  const onclickButtom = () => {
    history.push({
      pathname: '/home',
    });
  };
  return (
    <div className={style['custom-buttom']}>
      <button data-testid="button" onClick={onclickButtom}>
        {label}
      </button>
    </div>
  );
};

CustomButtom.propTypes = {
  label: PropTypes.string,
  history: PropTypes.object,
};

export default CustomButtom;
