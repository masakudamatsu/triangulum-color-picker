import React from 'react';
import PropTypes from 'prop-types';

import DivAlert from 'src/blocks/DivAlert';

const ErrorMessage = ({errorText}) => {
  return (
    <DivAlert data-testid="error-message-component">
      <DivAlert.Paragraph>{errorText}</DivAlert.Paragraph>
    </DivAlert>
  );
};

ErrorMessage.propTypes = {
  errorText: PropTypes.string,
};

export default ErrorMessage;
