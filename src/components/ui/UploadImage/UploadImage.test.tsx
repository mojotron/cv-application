import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadImage from './UploadImage';

describe('UI component UploadImage', () => {
  test('initial render', () => {
    render(<UploadImage />);
  });
});
