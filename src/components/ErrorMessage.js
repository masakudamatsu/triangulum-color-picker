import React from 'react';
import PropTypes from 'prop-types';

import DivAlert from 'src/blocks/DivAlert';

const ErrorMessage = ({error, id}) => {
  return (
    <DivAlert show={error} data-testid="error-message-component">
      <DivAlert.Paragraph id={id}>{error}</DivAlert.Paragraph>
    </DivAlert>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
};

export default ErrorMessage;
