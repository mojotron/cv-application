import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditButton from './EditButton';

describe('UI component - Edit button', () => {
  test('render component correctly', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<EditButton onClick={handleClick} />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    await user.click(btn);
    expect(handleClick).toBeCalledTimes(1);
  });
});
