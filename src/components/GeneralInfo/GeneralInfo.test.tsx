import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GlobalInfo from './GeneralInfo';

describe('General Info - component', () => {
  describe('static elements', () => {
    test('render name', () => {
      render(<GlobalInfo />);
      const mainHeading = screen.getByRole('heading', { level: 1 });

      expect(mainHeading).toHaveTextContent(/johndoe/i);
    });
    test('render position', () => {
      render(<GlobalInfo />);
      const subHeading = screen.getByRole('heading', { level: 2 });
      expect(subHeading).toHaveTextContent(/frontend developer/i);
    });
    test('render bio', () => {
      render(<GlobalInfo />);
      const paragraph = screen.getByText(/lorem ipsum/i);
      expect(paragraph).toBeInTheDocument();
    });
    test('render image', () => {
      render(<GlobalInfo />);
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    });
  });
});
