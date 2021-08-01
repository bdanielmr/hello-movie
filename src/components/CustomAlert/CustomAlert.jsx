/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
const CustomAlert = ({ error }) => {
  console.log('ver alert error', error);
  return (
    <div>
      <h1>Oops!</h1>
      {error?.status_message ? (
        <h3>
          Error, estamos teniendo algunos problemas intenta actulizar la web
        </h3>
      ) : (
        <h3>No se encontraron coincidencias, intenta con otro titulo</h3>
      )}
    </div>
  );
};

CustomAlert.propTypes = {
  history: PropTypes.object,
  error: PropTypes.any,
};

export default CustomAlert;
