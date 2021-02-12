import styled from 'styled-components';

import {mediaQuery, twoColumns} from 'src/utils/breakpoints';
import {
  flexbox,
  formNumberLarge,
  header,
  page,
  scale,
} from 'src/utils/designSpecs';
import remify from 'src/utils/remify';

const Main = styled.main`
  padding-top: ${remify(header.height + header.borderBottomWidth)};
  @media only screen and ${mediaQuery.font} {
    padding-top: ${remify(header.height * scale + header.borderBottomWidth)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${mediaQuery.twoColumnsTall} {
    height: 100vh;
    padding-top: 0;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${mediaQuery.threeColumnsTall} {
    height: 100vh;
    padding-top: 0;
  }
`;

Main.MarginTop = styled.div`
  height: ${remify(page.whitespace.aboveColorCode)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(page.whitespace.aboveColorCode * scale)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    height: ${remify(page.whitespace.topMargin)};
    width: 100%;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    height: ${remify(page.whitespace.topMargin)};
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
    height: ${remify(
      flexbox.height.twoColumns + 5,
    )}; /* Flex items will be wrapped with less than this height */
    padding: 0 ${remify(page.whitespace.sideMargin)};
    width: ${remify(twoColumns.minWidth)};
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    height: ${remify(formNumberLarge.height * scale * 2)};
    justify-content: center;
    padding: 0 ${remify(page.whitespace.sideMargin)};
    width: auto;
  }
`;

Main.MarginBetweenColumns = styled.div`
  display: none;
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: 100vh;
    width: ${remify(page.whitespace.betweenComponents)};
  }
`;

Main.MarginBottom = styled.div`
  height: ${remify(page.whitespace.aboveColorCode)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(page.whitespace.aboveColorCode * scale)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    display: block;
    height: ${remify(page.whitespace.bottomMargin)};
    width: 100%;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: ${remify(page.whitespace.bottomMargin)};
    width: 100%;
  }
`;

export default Main;
