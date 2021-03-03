import React from 'react';

import AppBar from 'src/components/AppBar';
import BannerForNoJs from 'src/components/BannerForNoJs';
import CanvasWrapper from 'src/components/CanvasWrapper';
import ChromaLuminanceForm from 'src/components/ChromaLuminanceForm';
import Cross from 'src/components/Cross';
import Footnote from 'src/components/Footnote';
import H2 from 'src/elements/H2';
import Main from 'src/blocks/Main';
import SectionColorPalette from 'src/blocks/SectionColorPalette';
import TextFieldForHex from 'src/components/TextFieldForHex';
import TextFieldForHsl from 'src/components/TextFieldForHsl';
import TextFieldForRgb from 'src/components/TextFieldForRgb';
import TextInputForm from 'src/components/TextInputForm';
import WrapperColorData from 'src/blocks/WrapperColorData';
import WrapperForms from 'src/blocks/WrapperForms';

import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color
import useWindowWidth from 'src/utils/useWindowWidth';

const userColorReducer = (state, action) => {
  return {...state, ...action};
};

function HomePage() {
  const windowWidth = useWindowWidth();
  let pixelSize;
  // if (windowWidth < 535) {
  pixelSize = 3;
  // } else {
  //   pixelSize = 5;
  // } // see https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app for why this style of case handling is best for performance
  console.log(`The pixel size is set to be ${pixelSize}`);

  const [userColor, setUserColor] = React.useReducer(userColorReducer, {
    cssCode: 'rgb(255, 0, 0)',
    hex: '#ff0000',
    r: 255,
    g: 0,
    b: 0,
    h: 0,
    s: 100,
    l: 50,
    validCode: 'rgb(255, 0, 0)',
  });

  function updateUserColor(validColorCode, colorCodeType) {
    if (
      colorCodeType !== 'hex' &&
      colorCodeType !== 'rgb' &&
      colorCodeType !== 'hsl'
    ) {
      throw new Error(
        `A wrong second argument for updateUserColor. It should be either "hex", "rgb", or "hsl". But you provided ${colorCodeType}.`,
      );
    }
    const {hex, rgb, hsl} = parseColor(validColorCode);
    if (!hex || !rgb || !hsl) {
      throw new Error(
        `A wrong first argument for updateUserColor. It should be a valid CSS color code. But you provided ${validColorCode}.`,
      );
    }
    switch (colorCodeType) {
      case 'hex': {
        let hexCorrected;
        // Deal with 3-digit Hex code
        if (validColorCode.length === 4) {
          const red = hex.charAt(1);
          const green = hex.charAt(3);
          const blue = hex.charAt(5);
          hexCorrected = `#${red}${green}${blue}`;
        } else {
          hexCorrected = hex;
        }
        setUserColor({
          cssCode: hexCorrected,
          hex: hexCorrected,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: hexCorrected,
        });
        break;
      }
      case 'rgb': {
        const rgbCode = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        setUserColor({
          cssCode: rgbCode,
          hex: hex,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: rgbCode,
        });
        break;
      }
      case 'hsl': {
        const hslCode = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
        setUserColor({
          cssCode: hslCode,
          hex: hex,
          r: rgb[0],
          g: rgb[1],
          b: rgb[2],
          h: hsl[0],
          s: hsl[1],
          l: hsl[2],
          validCode: hslCode,
        });
        break;
      }
      default:
        throw new Error('updateUserColor has thrown an impossible error.');
    }
  }

  // Prepare prop values
  const {luminance, chroma, hue} = colorAnalyzer(userColor.validCode);
  const pureHue = hue
    ? {
        r: parseColor(hue.rgb).rgb[0],
        g: parseColor(hue.rgb).rgb[1],
        b: parseColor(hue.rgb).rgb[2],
      }
    : {r: null, g: null, b: null};

  // Prepare prop value for TextFieldForHex
  const lightMode = luminance > Math.sqrt(21);

  // Prop values for TextFieldForRgb
  return (
    <>
      <AppBar />
      <Main>
        <noscript style={{width: '100%'}}>
          <Main.MarginTop />
          <BannerForNoJs />
        </noscript>
        <Main.MarginTop />
        <Main.FlexContainer>
          <WrapperForms>
            <H2 hidden>Setting Color</H2>
            <TextInputForm
              setUserColor={setUserColor}
              updateUserColor={updateUserColor}
              userColor={userColor.cssCode}
            />
            <WrapperForms.MarginBetweenColorCodeAndHexRgbHsl />
            <WrapperForms.WrapperHexRgbHsl>
              <TextFieldForHex
                backgroundColor={userColor.validCode}
                lightMode={lightMode}
                setUserColor={setUserColor}
                updateUserColor={updateUserColor}
                userColor={userColor.hex}
              />
              <WrapperForms.WrapperRgbHsl>
                <Cross position="topLeft" />
                <TextFieldForRgb
                  userColor={userColor}
                  setUserColor={setUserColor}
                />
                <WrapperForms.MarginBetweenRgbAndHsl />
                <TextFieldForHsl
                  setUserColor={setUserColor}
                  userColor={userColor}
                />
                <Cross position="bottomRight" />
              </WrapperForms.WrapperRgbHsl>
            </WrapperForms.WrapperHexRgbHsl>
          </WrapperForms>
          <Main.MarginBetweenColumns />
          <SectionColorPalette>
            <H2 hidden>Triangular Color Palette</H2>
            <CanvasWrapper
              pixelSize={pixelSize}
              luminance={luminance}
              pureHue={pureHue}
              chroma={chroma}
              updateUserColor={updateUserColor}
            />
          </SectionColorPalette>
          <Main.MarginBetweenColumns />
          <WrapperColorData>
            <WrapperColorData.WrapperSection>
              <Cross position="topLeft" large />
              <ChromaLuminanceForm type="chroma" value={chroma} />
              <Cross position="bottomRight" large />
            </WrapperColorData.WrapperSection>
            <WrapperColorData.WrapperSection>
              <Cross position="topLeft" large />
              <ChromaLuminanceForm type="luminance" value={luminance} />
              <Cross position="bottomRight" large />
            </WrapperColorData.WrapperSection>
          </WrapperColorData>
        </Main.FlexContainer>
        <Main.MarginBottom />
      </Main>
      <Footnote />
    </>
  );
}

export default HomePage;
