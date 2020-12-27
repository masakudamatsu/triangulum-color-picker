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
  const [userColor, setUserColor] = React.useState({
    cssCode: '',
    hex: '#000000',
  });

  const handleCssCodeChange = event => {
    const newCssCode = event.target.value;
    const {hex} = parseColor(newCssCode);
    const currentHex = userColor.hex;
    if (hex) {
      setUserColor({
        cssCode: newCssCode,
        hex: hex,
      });
    } else {
      setUserColor({
        cssCode: newCssCode,
        hex: currentHex,
      });
    }
  };

  const handleHexChange = event => {
    return;
  };

  const parsedUserColor = parseColor(userColor.cssCode);
  // See https://www.npmjs.com/package/parse-color

  let isValid = Boolean(parsedUserColor.rgb);

  let lightMode = false;
  let canvasElement = null;
  if (isValid) {
    const {luminance, saturation, hue, neutralColor} = colorAnalyzer(
      userColor.cssCode,
    );

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
        handleChange={handleCssCodeChange}
        userColor={userColor.cssCode}
      />
      <SpacerVertical />
      <TextFieldForHex
        handleChange={handleHexChange}
        lightMode={lightMode}
        value={userColor.hex}
      />
      <SpacerVertical />
      {canvasElement}
    </FlexContainer>
  );
}

export default HomePage;
