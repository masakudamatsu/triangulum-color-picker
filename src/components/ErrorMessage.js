import React from 'react';
import PropTypes from 'prop-types';

import DivAlert from 'src/blocks/DivAlert';

const ErrorMessage = ({errorText, r, g, b}) => {
  return (
    <DivAlert data-testid="error-message-component" r={r} g={g} b={b}>
      <DivAlert.Paragraph>{errorText}</DivAlert.Paragraph>
    </DivAlert>
  );
};

ErrorMessage.propTypes = {
  errorText: PropTypes.string,
  r: PropTypes.bool,
  g: PropTypes.bool,
  b: PropTypes.bool,
};

export default ErrorMessage;
