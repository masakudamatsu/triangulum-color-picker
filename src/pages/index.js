import React from 'react';
import styled from 'styled-components';

import TextInputForm from 'src/components/TextInputForm';
import SpacerVertical from 'src/styledComponents/SpacerVertical';
import Canvas from 'src/components/Canvas';
import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color';

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

function HomePage() {
  const [userColor, setUserColor] = React.useState('');
  let isValid = Boolean(parseColor(userColor).rgb);

  let canvasElement = null;
  if (isValid) {
    const {luminance, saturation, hue, neutralColor} = colorAnalyzer(userColor);
    const pureHue = {
      r: parseColor(hue.rgb).rgb[0],
      g: parseColor(hue.rgb).rgb[1],
      b: parseColor(hue.rgb).rgb[2],
    };
    canvasElement = (
      <Canvas luminance={luminance} pureHue={pureHue} saturation={saturation} />
    );
  }

  return (
    <FlexContainer>
      <TextInputForm
        inputId="colorCode"
        labelText="Enter CSS color code"
        setUserColor={setUserColor}
        userColor={userColor}
      />
      <SpacerVertical />
      {canvasElement}
    </FlexContainer>
  );
}

export default HomePage;
