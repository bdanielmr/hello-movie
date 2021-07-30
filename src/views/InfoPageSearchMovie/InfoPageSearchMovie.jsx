/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const InfoPageSearchMovie = ({ match }) => {
  console.log('see prop', match);
  return <div>pelicula {match.params.id}</div>;
};

InfoPageSearchMovie.propTypes = {
  match: PropTypes.object,
};

export default InfoPageSearchMovie;
