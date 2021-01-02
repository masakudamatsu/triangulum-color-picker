import styled from 'styled-components';
import PropTypes from 'prop-types';

const Line = styled.line`
  stroke: ${props => `${props.lineColor}`};
`;

Line.propTypes = {
  lineColor: PropTypes.string.isRequired,
};

export default Line;
