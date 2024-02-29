import { Fallback } from 'components/Fallback';
import { render, screen } from 'tests/utils';

beforeEach(() => {
  render(<Fallback text="Vitest" />);
});

describe('Fallback', () => {
  it('must contain word', () => {
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  });
});
