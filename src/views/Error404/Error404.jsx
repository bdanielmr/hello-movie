/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Error404 = (props) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {' '}
        <h1>Oops!</h1>
        <a href="/">regresa al inicio</a>
      </div>
    </div>
  );
};

Error404.propTypes = {};

export default Error404;
