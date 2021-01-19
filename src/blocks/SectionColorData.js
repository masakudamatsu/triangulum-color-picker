import styled from 'styled-components';
import PropTypes from 'prop-types';

import {formNumberLarge, scale} from 'src/utils/designSpecs';
import {textcrop, typescale} from 'src/utils/typography';
import {mediaQuery} from 'src/utils/breakpoints';

import H2 from 'src/elements/H2';
import Output from 'src/elements/Output';
import Paragraph from 'src/elements/Paragraph';
import Unit from 'src/elements/Unit';

const SectionColorData = styled.section`
  background-color: inherit;
  width: auto;
`;

SectionColorData.H2 = H2;

SectionColorData.InnerWrapper = styled.div`
  align-items: baseline; /* Bottom-align */
  display: flex;
  height: ${formNumberLarge.capheight.output}px; /* Text crop */
  justify-content: flex-end; /* Left-align */
  position: relative; /* to position Unit */
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.capheight.output * scale}px;
  }
`;

SectionColorData.Output = styled(Output)`
  padding-right: 20px;
`;

SectionColorData.Paragraph = Paragraph;

SectionColorData.SpacerAboveOutput = styled.div`
  height: ${formNumberLarge.whitespace.aboveOutput}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.aboveOutput * scale}px;
  }
`;

SectionColorData.SpacerBelowH2 = styled.div`
  height: ${formNumberLarge.whitespace.belowH2}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.belowH2 * scale}px;
  }
`;

SectionColorData.SpacerBelowOutput = styled.div`
  height: ${formNumberLarge.whitespace.belowOutput}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${formNumberLarge.whitespace.belowOutput * scale}px;
  }
`;

SectionColorData.Unit = styled(Unit)`
  bottom: 0;
  position: absolute;
`;

SectionColorData.propTypes = {};

export default SectionColorData;
