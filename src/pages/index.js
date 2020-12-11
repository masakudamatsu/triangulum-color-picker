import Canvas from 'src/components/Canvas';
import Template from 'src/components/Template';
import styled from 'styled-components';

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

function HomePage() {
  return (
    <FlexContainer>
      <Template />
      <Canvas />
    </FlexContainer>
  );
}

export default HomePage;
