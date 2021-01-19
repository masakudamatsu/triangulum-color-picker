import styled from 'styled-components';
import PropTypes from 'prop-types';

import {mediaQuery, twoColumns} from 'src/utils/breakpoints';
import {canvas, flexbox, page} from 'src/utils/designSpecs';

const Main = styled.main`
  @media only screen and ${mediaQuery.twoColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }
`;

Main.Column = styled.div`
  @media only screen and ${mediaQuery.threeColumns} {
    align-self: ${props => (props.bottom ? 'flex-end' : 'flex-start')};
  }
`;

Main.FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and ${mediaQuery.twoColumns} {
    flex-wrap: wrap;
    height: ${(flexbox.height.twoColumns + 1).toFixed()}px;
    width: ${twoColumns.minWidth.toFixed()}px;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    flex-direction: row;
    flex-wrap: nowrap;
    height: ${canvas.width.large}px;
    justify-content: center;
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

Main.MarginSide = styled.div`
  display: none;
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: 100vh;
    width: ${page.whitespace.sideMargin}px;
  }
`;

Main.MarginTop = styled.div`
  display: none;
  @media only screen and ${mediaQuery.twoColumns} {
    display: block;
    height: ${page.whitespace.topMargin}px;
    width: 100%;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    display: block;
    height: ${page.whitespace.topMargin}px;
    width: 100%;
  }
`;

Main.propTypes = {};

export default Main;
