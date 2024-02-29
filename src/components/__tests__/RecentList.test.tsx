/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import { render, screen, waitFor } from 'tests/utils';
import { pushRecentSong } from 'utils/storage';

import { RecentList } from '../RecentList';

beforeEach(() => {
  render(<RecentList />);
});

describe('RecentList', () => {
  it('must contain words', async () => {
    pushRecentSong('React');
    pushRecentSong('TypeScript');
    pushRecentSong('Vitest');

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Vitest')).toBeInTheDocument();
    });
  });
});
