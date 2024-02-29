import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { render, screen } from 'tests/utils';
import { vi } from 'vitest';

import { Input } from '../Input';

let value: URLSearchParams | undefined;

vi.mock('react-router-dom', async () => {
  const module = await vi.importActual('react-router-dom');

  return {
    ...module,
    useSearchParams: () => {
      const [params, setParams] = useState(new URLSearchParams(value));

      return [
        params,
        (next: string) => {
          value = new URLSearchParams(next);
          setParams(value);
        }
      ];
    }
  };
});

beforeEach(() => {
  render(<Input />);
});

describe('Input', () => {
  it('must change search params', async () => {
    await userEvent.type(screen.getByTestId('search-input'), 'Vitest');
    await userEvent.keyboard('{Enter}');
    expect(value?.get('q')).toBe('Vitest');
  });

  it('must clear search params', async () => {
    await userEvent.type(screen.getByTestId('search-input'), 'Vitest');
    await userEvent.keyboard('{Enter}');
    await userEvent.clear(screen.getByTestId('search-input'));
    await userEvent.keyboard('{Delete}');
    expect(value?.get('q')).toBeNull();
  });
});
