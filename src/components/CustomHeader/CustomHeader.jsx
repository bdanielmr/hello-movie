/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/hellomovielogo.svg';
import { Link } from 'react-router-dom';
const CustomHeader = (props) => {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        display: 'flex',
        width: '100%',
        height: '55px',
        background: 'rgba(3, 37, 65, 1)',
        zIndex: '99999',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', width: '60%' }}>
          <Link style={{ display: 'flex', margin: 0, padding: 0 }} to="/home">
            <img width="180px" src={logo} />
          </Link>
        </div>
      </div>
    </header>
  );
};

CustomHeader.propTypes = {};

export default CustomHeader;
