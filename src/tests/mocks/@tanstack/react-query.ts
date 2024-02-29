import { UseSuspenseQueryOptions } from '@tanstack/react-query';
import { vi } from 'vitest';

vi.mock('@tanstack/react-query', async () => {
  const module = await vi.importActual('@tanstack/react-query');

  return {
    ...module,
    useSuspenseQuery: vi.fn((options: UseSuspenseQueryOptions) => {
      if (options.queryKey[0] === 'access-token') {
        return {
          data: { access_token: 'vitest' },
          error: null,
          isLoading: false,
          isSuccess: true
        };
      } else if (options.queryKey[0] === 'search') {
        return {
          data: {
            tracks: {
              items: [
                {
                  id: '1',
                  name: 'React',
                  uri: '#react'
                },
                {
                  id: '2',
                  name: 'TypeScript',
                  uri: '#typescript'
                },
                {
                  id: '3',
                  name: 'Vitest',
                  uri: '#vitest'
                }
              ]
            }
          },
          error: null,
          isLoading: false,
          isSuccess: true
        };
      }

      return {
        data: undefined,
        error: null,
        isLoading: false,
        isSuccess: true
      };
    })
  };
});
