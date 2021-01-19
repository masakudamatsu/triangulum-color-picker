import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionColorData from 'src/blocks/SectionColorData';
import Span from 'src/elements/Span';
import {formNumberLarge} from 'src/utils/designSpecs';

const ChromaLuminanceForm = ({type, value}) => {
  const inputId = type === 'chroma' ? 'chroma' : 'luminance';

  const sublabelId =
    type === 'chroma' ? 'chroma-sublabel' : 'luminance-sublabel';

  const helperTextId = type === 'chroma' ? 'chroma-helper' : 'luminance-helper';

  const helperText =
    type === 'chroma' ? (
      <SectionColorData.Paragraph id={helperTextId} rightAligned>
        0% for gray <Span dash>–</Span> 100% for pure hue
      </SectionColorData.Paragraph>
    ) : (
      <SectionColorData.Paragraph id={helperTextId} rightAligned>
        <Span ratio>1:1</Span> for black <Span dash>–</Span>{' '}
        <Span ratio>21:1</Span> for white
      </SectionColorData.Paragraph>
    );

  const unit =
    type === 'chroma' ? (
      <SectionColorData.Unit>%</SectionColorData.Unit>
    ) : (
      <SectionColorData.Unit>
        <Span colon>:</Span>1
      </SectionColorData.Unit>
    );

  return (
    <SectionColorData>
      <SectionColorData.H2>
        {type === 'chroma' ? 'Chroma' : 'Luminance'}
      </SectionColorData.H2>
      <SectionColorData.SpacerBelowH2 />{' '}
      <SectionColorData.Paragraph id={sublabelId}>
        {type === 'chroma'
          ? 'Pure hue share in the mix with gray'
          : 'Contrast ratio against pure black'}
      </SectionColorData.Paragraph>
      <SectionColorData.SpacerAboveOutput />
      <SectionColorData.InnerWrapper>
        <SectionColorData.Output
          aria-describedby={`${sublabelId} ${helperTextId}`}
          data-testid={inputId}
          htmlFor="colorCode hex r g b h s l"
          id={inputId}
        >
          {value}
        </SectionColorData.Output>
        {unit}
      </SectionColorData.InnerWrapper>
      <SectionColorData.SpacerBelowOutput />
      {helperText}
    </SectionColorData>
  );
};

ChromaLuminanceForm.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};

export default ChromaLuminanceForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
