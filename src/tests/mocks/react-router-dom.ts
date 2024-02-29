import { vi } from 'vitest';

vi.spyOn(console, 'error').mockImplementation((...args) => {
  if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
    console.error(...args);
  }
});
