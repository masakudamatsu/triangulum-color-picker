import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
  color: inherit;
  font-size: 0.5rem;
  &::before {
    margin-bottom: -6.12px;
  }
  &::after {
    margin-top: -6.563px;
  }
`;

Label.propTypes = {};

export default Label;
