import { useSongs } from 'hooks/useSongs';
import { MouseEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecentSongs, pushRecentSong } from 'utils/storage';

export const SongList = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';
  const songs = useSongs();

  const handleItemClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    const prevRecentSearches = getRecentSongs();
    const { value } = event.currentTarget.dataset;

    if (value && !prevRecentSearches.includes(value)) {
      pushRecentSong(value);
    }
  }, []);

  if (queryValue && !songs?.length) {
    return <p className="mt-4 text-red-800">No results found</p>;
  }

  if (!queryValue) {
    return null;
  }

  return (
    <div className="mt-4 list-none text-lg">
      {songs?.map((song) => (
        <a
          className="mb-2 block overflow-x-hidden text-ellipsis whitespace-nowrap"
          data-value={song.name}
          href={song.href}
          key={song.id}
          onClick={handleItemClick}
          title={song.name}>
          <span aria-label="Musical Note" className="pr-2" role="img">
            🎵
          </span>
          {song.name}
        </a>
      ))}
    </div>
  );
};
