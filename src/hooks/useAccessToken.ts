import { useSuspenseQuery } from '@tanstack/react-query';
import { AccessTokenResponse } from 'types/spotify';
import { fetchAccessToken } from 'utils/fetchAccessToken';

export const useAccessToken = (): string => {
  const { data } = useSuspenseQuery<AccessTokenResponse>({
    queryFn: fetchAccessToken,
    queryKey: ['access-token'],
    refetchInterval: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60
  });

  return data.access_token || '';
};
