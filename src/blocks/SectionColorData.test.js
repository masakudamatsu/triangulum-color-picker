import React from 'react';
import {render} from '@testing-library/react';

import SectionColorData from './SectionColorData';

const mockProps = {
  parent: {},
  h2: {},
  innerwrapper: {},
  output: {},
  paragraph: {},
  unit: {},
};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<SectionColorData {...mockProps.parent} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: inherit;
        width: auto;
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
  test('H2', () => {
    const {container} = render(<SectionColorData.H2 {...mockProps.h2} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 1.7857rem;
        font-weight: 300;
        line-height: 1.2285;
        -webkit-transform: translateX(-0.065em);
        -ms-transform: translateX(-0.065em);
        transform: translateX(-0.065em);
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.263em;
      }

      .c0::after {
        margin-top: -0.316em;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 2.1429rem;
        }
      }

      <div>
        <h2
          class="c0"
        />
      </div>
    `);
  });
  test('SpacerAboveOutput', () => {
    const {container} = render(<SectionColorData.SpacerAboveOutput />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.4375rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.725rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('SpacerBelowOutput', () => {
    const {container} = render(<SectionColorData.SpacerBelowOutput />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.1875rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.425rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('SpacerBelowH2', () => {
    const {container} = render(<SectionColorData.SpacerBelowH2 />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 0.75rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 0.9rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('InnerWrapper', () => {
    const {container} = render(
      <SectionColorData.InnerWrapper {...mockProps.innerwrapper} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: baseline;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 3.75rem;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        position: relative;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 4.5rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
  test('Output', () => {
    const {container} = render(
      <SectionColorData.Output {...mockProps.output} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 5.3419rem;
        font-weight: 100;
        line-height: 1.188;
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.24em;
      }

      .c0::after {
        margin-top: -0.2575em;
      }

      .c1 {
        padding-right: 1.25rem;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 6.4103rem;
        }
      }

      <div>
        <output
          class="c0 c1"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(
      <SectionColorData.Paragraph {...mockProps.paragraph} />,
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 0.8929rem;
        font-weight: 300;
        line-height: 1.365;
        text-align: left;
        -webkit-transform: translateX(-0.08em);
        -ms-transform: translateX(-0.08em);
        transform: translateX(-0.08em);
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.3165em;
      }

      .c0::after {
        margin-top: -0.4195em;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <p
          class="c0"
        />
      </div>
    `);
  });
  test('Unit', () => {
    const {container} = render(<SectionColorData.Unit {...mockProps.unit} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Poppins',Verdana,sans-serif;
        font-size: 1.7806rem;
        font-weight: 100;
        line-height: 1.215;
      }

      .c0::before,
      .c0::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
      }

      .c0::before {
        margin-bottom: -0.264em;
      }

      .c0::after {
        margin-top: -0.281em;
      }

      .c1 {
        bottom: 2px;
        position: absolute;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 2.1368rem;
        }
      }

      @media only screen and (min-width:45.5rem) {
        .c1 {
          bottom: 1px;
        }
      }

      <div>
        <span
          class="c0 c1"
        />
      </div>
    `);
  });
});
