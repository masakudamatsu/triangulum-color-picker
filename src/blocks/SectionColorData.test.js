import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

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
        margin-bottom: -0.771em;
        -webkit-transform: translateX(-0.065em) translateY(-0.37em);
        -ms-transform: translateX(-0.065em) translateY(-0.37em);
        transform: translateX(-0.065em) translateY(-0.37em);
      }

      @media only screen and (min-width:728px) {
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
        height: 20px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 24px;
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
        height: 20px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 24px;
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
        height: 10px;
        width: 100%;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 12px;
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
        height: 60px;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        position: relative;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          height: 72px;
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
        line-height: 1;
        margin-bottom: -0.3158em;
        -webkit-transform: translateY(-0.1286em);
        -ms-transform: translateY(-0.1286em);
        transform: translateY(-0.1286em);
      }

      .c1 {
        padding-right: 20px;
      }

      @media only screen and (min-width:728px) {
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
        line-height: 1;
        margin-bottom: -0.28em;
        -webkit-transform: translateX(-0.08em) translateY(-0.1375em);
        -ms-transform: translateX(-0.08em) translateY(-0.1375em);
        transform: translateX(-0.08em) translateY(-0.1375em);
        text-align: left;
      }

      @media only screen and (min-width:728px) {
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
        -webkit-transform: translateY(0.46em);
        -ms-transform: translateY(0.46em);
        transform: translateY(0.46em);
      }

      .c1 {
        bottom: 0;
        position: absolute;
      }

      @media only screen and (min-width:728px) {
        .c0 {
          font-size: 2.1368rem;
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
