import React from 'react';
import styled from 'styled-components';

import TextInputForm from 'src/components/TextInputForm';
import TextFieldForHex from 'src/components/TextFieldForHex';
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
  const parsedUserColor = parseColor(userColor);
  // See https://www.npmjs.com/package/parse-color

  let isValid = Boolean(parsedUserColor.rgb);

  let lightMode = false;
  let canvasElement = null;
  if (isValid) {
    const {luminance, saturation, hue, neutralColor} = colorAnalyzer(userColor);

    lightMode = luminance > Math.sqrt(21);

    const pureHue = hue
      ? {
          r: parseColor(hue.rgb).rgb[0],
          g: parseColor(hue.rgb).rgb[1],
          b: parseColor(hue.rgb).rgb[2],
        }
      : {r: 255, g: 0, b: 0};
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
      <TextFieldForHex lightMode={lightMode} value={parsedUserColor.hex} />
      <SpacerVertical />
      {canvasElement}
    </FlexContainer>
  );
}

export default HomePage;
