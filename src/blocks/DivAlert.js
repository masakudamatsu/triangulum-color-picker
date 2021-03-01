import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paragraph from 'src/elements/Paragraph';
import {color} from 'src/utils/specColor';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';
import {paragraphAlert, triangleWidth} from 'src/utils/specLayout';

const DivAlert = styled.div`
  background-color: ${color.input.error};
  color: ${color.input.onError};
  display: flex;
  justify-content: center;
  left: 0;
  padding: ${remify(paragraphAlert.aboveParagraph)} 0
    ${remify(paragraphAlert.belowParagraph)};
  position: fixed;
  top: 0;
  -webkit-transform: translate3d(0, 0, 0); /* Fix iOS Safari and Chrome bug */
  width: 100vw;
  z-index: 1;
  @media only screen and ${mediaQuery.twoColumns} {
    left: 90%;
    padding-left: ${remify(paragraphAlert.sideMargin)};
    padding-right: ${remify(paragraphAlert.sideMargin)};
    position: absolute;
    top: 90%;
    width: auto;
  }
`;

DivAlert.Paragraph = styled(Paragraph).attrs(props => ({
  role: 'alert',
}))`
  width: ${remify(triangleWidth)};
  @media only screen and ${mediaQuery.font} {
    width: ${remify(triangleWidth * scale)};
  }
`;

DivAlert.Paragraph.propTypes = {
  rightAligned: PropTypes.bool,
};

export default DivAlert;
