import React from 'react';
import styled from 'styled-components';

import Canvas from 'src/components/Canvas';
import SpacerVertical from 'src/styledComponents/SpacerVertical';
import TextFieldForHex from 'src/components/TextFieldForHex';
import TextInputForm from 'src/components/TextInputForm';
import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color
import {regex} from 'src/utils/regex';

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
    validCode: 'rgb(0, 0, 0)',
  });

  const handleCssCodeChange = event => {
    const newCssCode = event.target.value.trim().replace(/\s/g, '');
    const currentHex = userColor.hex;
    const currentValidCode = userColor.validCode;
    if (regex.hex.test(newCssCode)) {
      const {hex} = parseColor(newCssCode);
      setUserColor({
        cssCode: hex,
        hex: hex,
        validCode: hex,
      });
    } else if (regex.hsl.test(newCssCode)) {
      const {hex, hsl} = parseColor(newCssCode);
      const hslCode = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
      setUserColor({
        cssCode: hslCode,
        hex: hex,
        validCode: hslCode,
      });
    } else if (regex.rgb.test(newCssCode)) {
      const {hex, rgb} = parseColor(newCssCode);
      const rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      setUserColor({
        cssCode: rgbCode,
        hex: hex,
        validCode: rgbCode,
      });
    } else {
      setUserColor({
        cssCode: event.target.value,
        hex: currentHex,
        validCode: currentValidCode,
      });
    }
  };

  const handleHexChange = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    const currentCssCode = userColor.cssCode;
    const currentValidCode = userColor.validCode;
    if (regex.hex.test(newUserValue)) {
      const {hex} = parseColor(newUserValue);
      setUserColor({
        cssCode: hex,
        hex: hex,
        validCode: hex,
      });
    } else {
      setUserColor({
        cssCode: currentCssCode,
        hex: event.target.value,
        validCode: currentValidCode,
      });
    }
  };

  // Prepare prop values for Canvas component
  const {luminance, saturation, hue, neutralColor} = colorAnalyzer(
    userColor.validCode,
  );
  const pureHue = hue
    ? {
        r: parseColor(hue.rgb).rgb[0],
        g: parseColor(hue.rgb).rgb[1],
        b: parseColor(hue.rgb).rgb[2],
      }
    : {r: 188, g: 188, b: 188}; // contrast ratio 11.04 (the middle value between 1 and 21)

  // Prepare prop value for TextFieldForHex
  const lightMode = luminance > Math.sqrt(21);

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
        backgroundColor={userColor.validCode}
        handleChange={handleHexChange}
        lightMode={lightMode}
        value={userColor.hex}
      />
      <SpacerVertical />
      <Canvas luminance={luminance} pureHue={pureHue} saturation={saturation} />
    </FlexContainer>
  );
}

export default HomePage;
