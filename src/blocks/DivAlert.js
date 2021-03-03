import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paragraph from 'src/elements/Paragraph';
import {color} from 'src/utils/specColor';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';
import {
  formHex,
  formNumberSmall,
  paragraphAlert,
  rgbHslWrapper,
  triangleWidth,
} from 'src/utils/specLayout';

const DivAlert = styled.div`
  background-color: ${color.input.error};
  color: ${color.input.onError};
  display: flex;
  justify-content: center;
  left: ${props =>
    props.r
      ? remify(-(formHex.diameter + rgbHslWrapper.padding))
      : props.g
      ? remify(
          -(
            formHex.diameter +
            rgbHslWrapper.padding +
            formNumberSmall.diameter
          ),
        )
      : props.b
      ? remify(
          -(
            formHex.diameter +
            rgbHslWrapper.padding +
            formNumberSmall.diameter * 2
          ),
        )
      : remify(paragraphAlert.marginLeft)};
  padding-bottom: ${remify(paragraphAlert.belowParagraph)};
  padding-left: ${remify(paragraphAlert.sideMargin)};
  padding-right: ${remify(paragraphAlert.sideMargin)};
  padding-top: ${remify(paragraphAlert.aboveParagraph)};
  position: absolute;
  top: 90%;
  width: ${remify(triangleWidth)};
  z-index: 1; /* Otherwise HSL fields come forward */
  @media only screen and ${mediaQuery.font} {
    left: ${props =>
      props.r
        ? remify(-(formHex.diameter + rgbHslWrapper.padding) * scale)
        : props.g
        ? remify(
            -(
              formHex.diameter +
              rgbHslWrapper.padding +
              formNumberSmall.diameter
            ) * scale,
          )
        : props.b
        ? remify(
            -(
              formHex.diameter +
              rgbHslWrapper.padding +
              formNumberSmall.diameter * 2
            ) * scale,
          )
        : remify(paragraphAlert.marginLeft * scale)};
    padding-bottom: ${remify(paragraphAlert.belowParagraph * scale)};
    padding-left: ${remify(paragraphAlert.sideMargin * scale)};
    padding-right: ${remify(paragraphAlert.sideMargin * scale)};
    padding-top: ${remify(paragraphAlert.aboveParagraph * scale)};
    width: ${remify(triangleWidth * scale)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    left: 90%;
    position: absolute;
    top: 90%;
    width: auto;
  }
`;

DivAlert.Paragraph = styled(Paragraph).attrs(props => ({
  role: 'alert',
}))``;

DivAlert.propTypes = {
  r: PropTypes.bool,
  g: PropTypes.bool,
  b: PropTypes.bool,
};

DivAlert.Paragraph.propTypes = {
  rightAligned: PropTypes.bool,
};

export default DivAlert;
