import React from 'react';
import styled from 'styled-components';

import Canvas from 'src/components/Canvas';
import ChromaLuminanceForm from 'src/components/ChromaLuminanceForm';
import Cross from 'src/components/Cross';
import SpacerVertical from 'src/styledComponents/SpacerVertical';
import TextFieldForHex from 'src/components/TextFieldForHex';
import TextFieldForHsl from 'src/components/TextFieldForHsl';
import TextFieldForRgb from 'src/components/TextFieldForRgb';
import TextInputForm from 'src/components/TextInputForm';

import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color
import {regex} from 'src/utils/regex';

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 310px;
`;

const RgbHslWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  width: 200px;
`;

const CanvasWrapper = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContrastRatioWrapper = styled.div`
  position: relative;
  padding: 40px;
  width: 310px;
`;

const userColorReducer = (state, action) => {
  return {...state, ...action};
};

function HomePage() {
  const [userColor, setUserColor] = React.useReducer(userColorReducer, {
    cssCode: '',
    hex: '#000000',
    r: 0,
    g: 0,
    b: 0,
    h: 0,
    s: 0,
    l: 0,
    chroma: 0,
    luminance: 1,
    validCode: 'rgb(0, 0, 0)',
  });

  const handleChangeCssCode = event => {
    const newCssCode = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newCssCode)) {
      const {hex, rgb, hsl} = parseColor(newCssCode);
      const {chroma, luminance} = colorAnalyzer(hex);
      setUserColor({
        cssCode: hex,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: hex,
      });
    } else if (regex.hsl.test(newCssCode)) {
      const {hex, rgb, hsl} = parseColor(newCssCode);
      const hslCode = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
      const {chroma, luminance} = colorAnalyzer(hslCode);
      setUserColor({
        cssCode: hslCode,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: hslCode,
      });
    } else if (regex.rgb.test(newCssCode)) {
      const {hex, rgb, hsl} = parseColor(newCssCode);
      const rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      const {chroma, luminance} = colorAnalyzer(rgbCode);
      setUserColor({
        cssCode: rgbCode,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: rgbCode,
      });
    } else {
      setUserColor({
        cssCode: event.target.value,
      });
    }
  };

  const handleChangeHex = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newUserValue)) {
      const {hex, rgb, hsl} = parseColor(newUserValue);
      const {chroma, luminance} = colorAnalyzer(hex);
      setUserColor({
        cssCode: hex,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: hex,
      });
    } else {
      setUserColor({
        hex: event.target.value,
      });
    }
  };

  const handleChangeR = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${newUserValue}, ${userColor.g}, ${userColor.b})`;
      const {hex, hsl} = parseColor(rgb);
      const {chroma, luminance} = colorAnalyzer(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        r: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: rgb,
      });
    } else {
      setUserColor({
        r: event.target.value,
      });
    }
  };

  const handleChangeG = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${userColor.r}, ${newUserValue}, ${userColor.b})`;
      const {hex, hsl} = parseColor(rgb);
      const {chroma, luminance} = colorAnalyzer(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        g: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: rgb,
      });
    } else {
      setUserColor({
        g: event.target.value,
      });
    }
  };

  const handleChangeB = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.rgbValues.test(newUserValue)) {
      const rgb = `rgb(${userColor.r}, ${userColor.g}, ${newUserValue})`;
      const {hex, hsl} = parseColor(rgb);
      const {chroma, luminance} = colorAnalyzer(rgb);
      setUserColor({
        cssCode: rgb,
        hex: hex,
        b: newUserValue,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        chroma: chroma,
        luminance: luminance,
        validCode: rgb,
      });
    } else {
      setUserColor({
        b: event.target.value,
      });
    }
  };

  const handleChangeH = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.hValue.test(newUserValue)) {
      const hsl = `hsl(${newUserValue}, ${userColor.s}%, ${userColor.l}%)`;
      const {hex, rgb} = parseColor(hsl);
      const {chroma, luminance} = colorAnalyzer(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        h: newUserValue,
        chroma: chroma,
        luminance: luminance,
        validCode: hsl,
      });
    } else {
      setUserColor({
        h: event.target.value,
      });
    }
  };

  const handleChangeS = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.slValues.test(newUserValue)) {
      console.log('saturation value passes the test');
      const hsl = `hsl(${userColor.h}, ${newUserValue}%, ${userColor.l}%)`;
      const {hex, rgb} = parseColor(hsl);
      const {chroma, luminance} = colorAnalyzer(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        s: newUserValue,
        chroma: chroma,
        luminance: luminance,
        validCode: hsl,
      });
    } else {
      setUserColor({
        s: event.target.value,
      });
    }
  };

  const handleChangeL = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.slValues.test(newUserValue)) {
      const hsl = `hsl(${userColor.h}, ${userColor.s}%, ${newUserValue}%)`;
      const {hex, rgb} = parseColor(hsl);
      const {chroma, luminance} = colorAnalyzer(hsl);
      setUserColor({
        cssCode: hsl,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        l: newUserValue,
        chroma: chroma,
        luminance: luminance,
        validCode: hsl,
      });
    } else {
      setUserColor({
        l: event.target.value,
      });
    }
  };

  // const handleChangeChroma = event => {
  //   const newUserValue = event.target.value.trim().replace(/\s/g, '');
  //   if (regex.chroma.test(newUserValue)) {
  //     setChroma(newUserValue);
  //   } else {
  //     setChroma(event.target.value);
  //   }
  // };
  //
  // Prepare prop values for Canvas component
  const {chroma, luminance} = userColor;
  const {hue, neutralColor} = colorAnalyzer(userColor.validCode);
  const pureHue = hue
    ? {
        r: parseColor(hue.rgb).rgb[0],
        g: parseColor(hue.rgb).rgb[1],
        b: parseColor(hue.rgb).rgb[2],
      }
    : {r: 188, g: 188, b: 188}; // contrast ratio 11.04 (the middle value between 1 and 21)

  // Prepare prop value for TextFieldForHex
  const lightMode = luminance > Math.sqrt(21);

  // Prop values for TextFieldForRgb
  return (
    <FlexContainer>
      <TextInputForm
        inputId="colorCode"
        labelText="Enter CSS color code"
        handleChange={handleChangeCssCode}
        userColor={userColor.cssCode}
      />
      <SpacerVertical />
      <FormWrapper>
        <TextFieldForHex
          backgroundColor={userColor.validCode}
          handleChange={handleChangeHex}
          lightMode={lightMode}
          value={userColor.hex}
        />
        <RgbHslWrapper>
          <Cross position="topLeft" />
          <TextFieldForRgb
            handleChange={{
              r: handleChangeR,
              g: handleChangeG,
              b: handleChangeB,
            }}
            r={userColor.r}
            g={userColor.g}
            b={userColor.b}
          />
          <SpacerVertical style={{height: '10px'}} />
          <TextFieldForHsl
            handleChange={{
              h: handleChangeH,
              s: handleChangeS,
              l: handleChangeL,
            }}
            h={userColor.h}
            s={userColor.s}
            l={userColor.l}
          />
          <Cross position="bottomRight" />
        </RgbHslWrapper>
      </FormWrapper>
      <SpacerVertical />
      <CanvasWrapper>
        <Canvas luminance={luminance} pureHue={pureHue} chroma={chroma} />
      </CanvasWrapper>
      <ContrastRatioWrapper>
        <Cross position="topLeft" large />
        <ChromaLuminanceForm type="chroma" value={chroma} />
        <Cross position="bottomRight" large />
      </ContrastRatioWrapper>
      <ContrastRatioWrapper>
        <Cross position="topLeft" large />
        <ChromaLuminanceForm type="luminance" value={luminance} />
        <Cross position="bottomRight" large />
      </ContrastRatioWrapper>
    </FlexContainer>
  );
}

export default HomePage;
