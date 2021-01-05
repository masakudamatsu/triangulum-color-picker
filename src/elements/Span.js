import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
  ${props =>
    props.colon
      ? `
      position: relative;
      bottom: 0.1em;
      right: 0.2em;
    `
      : null}
  ${props =>
    props.dash
      ? `
        position: relative;
        top: 0.05em;
      `
      : null}
  ${props =>
    props.ratio
      ? `
      letter-spacing: 0.1em;
    `
      : null}
`;

Span.propTypes = {
  colon: PropTypes.bool,
  dash: PropTypes.bool,
  ratio: PropTypes.bool,
};

export default Span;
