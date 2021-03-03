import styled from 'styled-components';

import InputText from './InputText';

const InputNumber = styled(InputText).attrs(props => ({
  inputMode: 'decimal',
}))``;

export default InputNumber;
