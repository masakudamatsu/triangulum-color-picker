import Canvas from 'src/components/Canvas';
import Template from 'src/components/Template';
import styled from 'styled-components';

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
  const userColor = 'rgb(29, 161, 242)';
  const {luminance, saturation, hue, neutralColor} = colorAnalyzer(userColor);
  const pureHue = {
    r: parseColor(hue.rgb).rgb[0],
    g: parseColor(hue.rgb).rgb[1],
    b: parseColor(hue.rgb).rgb[2],
  };

  return (
    <FlexContainer>
      <Template />
      <Canvas luminance={luminance} pureHue={pureHue} saturation={saturation} />
    </FlexContainer>
  );
}

export default HomePage;
