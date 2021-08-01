/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import errorMan from '../../img/1.6.png';
import errorCat from '../../img/no_search_results.png';
const CustomAlert = ({ error }) => {
  return (
    <div>
      <h1>Oops!</h1>
      {error?.status_message ? (
        <>
          <h3>
            Error, estamos teniendo algunos problemas intenta actulizar la web
          </h3>
          <img width="300px" src={errorMan} />
        </>
      ) : (
        <>
          <h3>No se encontraron coincidencias, intenta con otro titulo</h3>
          <img width="300px" src={errorCat} />
        </>
      )}
    </div>
  );
};

CustomAlert.propTypes = {
  history: PropTypes.object,
  error: PropTypes.any,
};

export default CustomAlert;
