import styled from 'styled-components';
import PropTypes from 'prop-types';

import {mediaQuery, twoColumns} from 'src/utils/breakpoints';
import {
  canvas,
  flexbox,
  formNumberLarge,
  header,
  page,
  scale,
} from 'src/utils/designSpecs';

const Main = styled.main`
  padding-top: ${header.height + header.borderBottomWidth}px;
  @media only screen and ${mediaQuery.font} {
    padding-top: ${header.height * scale + header.borderBottomWidth}px;
  }
  @media only screen and ${mediaQuery.twoColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${mediaQuery.twoColumnsTall} {
    height: 100vh;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${mediaQuery.threeColumnsTall} {
    height: 100vh;
  }
`;

Main.MarginTop = styled.div`
  height: ${page.whitespace.aboveColorCode}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${page.whitespace.aboveColorCode * scale}px;
  }
  @media only screen and ${mediaQuery.twoColumns} {
    height: ${page.whitespace.topMargin}px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    height: ${page.whitespace.topMargin}px;
    width: 100%;
  }
`;

Main.FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and ${mediaQuery.twoColumns} {
    flex-wrap: wrap;
    height: ${(
      flexbox.height.twoColumns + 3
    ).toFixed()}px; /* Flex items will be wrapped with less than this height */
    padding: 0 ${page.whitespace.sideMargin}px;
    width: ${twoColumns.minWidth.toFixed()}px;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    height: ${(formNumberLarge.height * scale * 2).toFixed()}px;
    justify-content: center;
    padding: 0 ${page.whitespace.sideMargin}px;
    width: auto;
  }
`;

Main.MarginBetweenColumns = styled.div`
  display: none;
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: 100vh;
    width: ${page.whitespace.betweenComponents}px;
  }
`;

Main.MarginBottom = styled.div`
  display: none;
  @media only screen and ${mediaQuery.twoColumns} {
    display: block;
    height: ${page.whitespace.bottomMargin}px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: ${page.whitespace.bottomMargin}px;
    width: 100%;
  }
`;

Main.propTypes = {};

export default Main;
