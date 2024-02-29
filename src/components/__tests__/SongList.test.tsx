import { render, screen } from 'tests/utils';
import { vi } from 'vitest';

import { SongList } from '../SongList';

vi.mock('react-router-dom', async () => {
  const module = await vi.importActual('react-router-dom');

  return {
    ...module,
    useSearchParams: () => [new URLSearchParams('q=daily-playlists'), () => {}]
  };
});

beforeEach(() => {
  render(<SongList />);
});

describe('SongList', () => {
  it('must contain words', () => {
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  });
});
