import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BillInput from './BillInput';
import { vi, describe, test, expect } from 'vitest';

describe('BillInput Component', () => {
  test('renders BillInput and updates value', () => {
    const setBill = vi.fn();
    render(<BillInput bill={100} setBill={setBill} />);

    const input = screen.getByLabelText(/Bill/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(100);

    fireEvent.change(input, { target: { value: '200' } });
    expect(setBill).toHaveBeenCalledWith(200);
  });
});