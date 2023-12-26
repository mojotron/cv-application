import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('UI component TextInput', () => {
  test('type input returns input element', () => {
    render(
      <TextInput value="hello" onType={() => {}} placeholder="first name" />,
    );
    const input = screen.getByPlaceholderText(/first name/i);
    expect(input).toHaveValue('hello');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('type textarea returns input element', () => {
    render(
      <TextInput
        value="my bio"
        onType={() => {}}
        type="textarea"
        placeholder="bio"
      />,
    );
    const input = screen.getByPlaceholderText(/bio/i);
    expect(input).toHaveValue('my bio');
  });

  test('user typing flow', async () => {
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

  test('display max input length flow', async () => {
    const setOnChange = vi.fn();

    render(
      <TextInput
        placeholder="first name"
        value="abcde"
        onType={setOnChange}
        maxLength={5}
      />,
    );
    const user = userEvent.setup();
    const inputEle = screen.getByPlaceholderText(/first name/);
    expect(screen.getByText(/\d+\/\d+/)).toHaveTextContent('5/5');
    expect(inputEle).toHaveValue('abcde');
    await user.type(inputEle, 'abcdefgh');
    expect(setOnChange).toBeCalledTimes(0);

    // expect(screen.getByText(/\d+\/\d+/)).toHaveTextContent('5/5');
  });

  test('name props sets name attribute on input', () => {
    render(
      <TextInput
        value="John"
        placeholder="first name"
        onType={() => {}}
        name="firstName"
      />,
    );
    const input = screen.getByPlaceholderText(/first name/i);
    expect(input).toHaveAttribute('name', 'firstName');
  });
});
