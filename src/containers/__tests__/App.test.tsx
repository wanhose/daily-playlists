import { render, screen } from '@testing-library/react';

import App from '../App';

beforeEach(() => {
  render(<App />);
});

describe('App', () => {
  it('must contain words', () => {
    expect(screen.getByText('Daily Playlists')).toBeInTheDocument();
  });
});
