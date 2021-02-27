import React from 'react';
import {render, screen} from '@testing-library/react';

import InputText from './InputText';
import {color} from 'src/utils/specColor';

const mockProps = {};

describe('Props work as intended', () => {
  test('error', () => {
    render(
      <form>
        <InputText id="input-text" error />
        <label htmlFor="input-text">Label Text</label>
      </form>,
    );
    expect(screen.getByLabelText('Label Text')).toHaveStyleRule(
      'background-color',
      color.input.error.replace(/\s/g, ''),
    );
    expect(screen.getByLabelText('Label Text')).toHaveStyleRule(
      'border-color',
      color.input.error.replace(/\s/g, ''),
    );
    expect(screen.getByLabelText('Label Text')).toHaveStyleRule(
      'color',
      color.input.onError.replace(/\s/g, ''),
    );
  });
});

test('renders UI correctly when:', () => {
  const {container} = render(<InputText {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background-color: rgb(10,10,10);
      border-color: rgb(255,255,255);
      border-style: solid;
      border-width: 1px;
      color: rgb(255,255,255);
    }

    .c0:active,
    .c0:hover,
    .c0:focus {
      border-width: 2px;
      outline: none;
    }

    <div>
      <input
        autocomplete="off"
        class="c0"
        type="text"
      />
    </div>
  `);
});
