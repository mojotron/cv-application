import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Avatar from './Avatar';

describe('UI component - Avatar', () => {
  test('render component correctly', () => {
    render(<Avatar imageUrl="/images/temp.jpg" alt="alt text" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/images/temp.jpg');
    expect(img).toHaveAttribute('alt', 'alt text');
  });
});
