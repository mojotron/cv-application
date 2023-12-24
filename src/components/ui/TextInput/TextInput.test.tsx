import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('UI component TextInput', () => {
  test('initial render', () => {
    render(<TextInput value="" onType={() => {}} />);
    const inputEle = screen.getByPlaceholderText(/type/i);
    expect(inputEle).toHaveProperty('placeholder', 'type');
    expect(inputEle).toHaveValue('');
  });

  test('user types into field', async () => {
    const setOnChange = vi.fn();

    render(
      <TextInput placeholder="first name" value="" onType={setOnChange} />,
    );
    const user = userEvent.setup();
    const inputEle = screen.getByPlaceholderText(/first name/);
    expect(inputEle).toHaveValue('');
    await user.type(inputEle, 'John');
    expect(setOnChange).toBeCalledTimes(4);
  });
});
