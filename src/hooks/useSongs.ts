import { useSuspenseQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Song } from 'types/song';
import { SearchResponse } from 'types/spotify';
import { fetchTracks } from 'utils/fetchTracks';

export const useSongs = (): readonly Song[] | undefined => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';
  const { data } = useSuspenseQuery<SearchResponse | undefined>({
    queryFn: () => fetchTracks(queryValue),
    queryKey: ['search', queryValue]
  });
  const trackItems = data?.tracks?.items;

  const songs: readonly Song[] | undefined = useMemo(
    () => trackItems?.map((item) => ({ href: item.uri, id: item.id, name: item.name })),
    [trackItems]
  );

  return songs;
};
