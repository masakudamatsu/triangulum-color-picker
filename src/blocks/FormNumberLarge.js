import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

import H2 from 'src/elements/H2';
import Output from 'src/elements/Output';
import Paragraph from 'src/elements/Paragraph';
import Unit from 'src/elements/Unit';

const FormNumberLarge = styled.section`
  background-color: inherit;
  width: auto;
`;

FormNumberLarge.H2 = H2;

FormNumberLarge.InnerWrapper = styled.div`
  align-items: baseline; /* Bottom-align */
  display: flex;
  height: 60px; /* Text crop */
  justify-content: flex-end; /* Left-align */
  position: relative; /* to position Unit */
`;

FormNumberLarge.Output = styled(Output)`
  padding-right: 20px;
`;

FormNumberLarge.Paragraph = Paragraph;

FormNumberLarge.Unit = styled(Unit)`
  bottom: 0;
  position: absolute;
`;

FormNumberLarge.propTypes = {};

export default FormNumberLarge;
