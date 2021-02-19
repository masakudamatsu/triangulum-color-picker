import styled from 'styled-components';

import {formNumberLarge, scale} from 'src/utils/designSpecs';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

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
  height: ${remify(formNumberLarge.capheight.output)}; /* Text crop */
  justify-content: flex-end; /* Left-align */
  position: relative; /* to position Unit */
  @media only screen and ${mediaQuery.font} {
    height: ${remify(formNumberLarge.capheight.output * scale)};
  }
`;

SectionColorData.Output = styled(Output)`
  padding-right: ${remify(20)};
`;

SectionColorData.Paragraph = Paragraph;

SectionColorData.SpacerAboveOutput = styled.div`
  height: ${remify(formNumberLarge.whitespace.aboveOutput)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(formNumberLarge.whitespace.aboveOutput * scale)};
  }
`;

SectionColorData.SpacerBelowH2 = styled.div`
  height: ${remify(formNumberLarge.whitespace.belowH2 + 2)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify((formNumberLarge.whitespace.belowH2 + 2) * scale)};
  }
`;

SectionColorData.SpacerBelowOutput = styled.div`
  height: ${remify(formNumberLarge.whitespace.belowOutput + 2)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify((formNumberLarge.whitespace.belowOutput + 2) * scale)};
  }
`;

SectionColorData.Unit = styled(Unit)`
  bottom: 0;
  position: absolute;
`;

export default SectionColorData;
