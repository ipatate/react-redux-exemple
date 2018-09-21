import React from 'react';
import PropTypes from 'prop-types';

const CatchError = ({ errorInfo }) => (
  <div>
    <h1>
      500 : Error
      { errorInfo }
    </h1>
  </div>
);

CatchError.propTypes = {
  errorInfo: PropTypes.string.isRequired
}

export default CatchError;
