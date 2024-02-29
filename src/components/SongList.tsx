import { useSongs } from 'hooks/useSongs';
import { useSearchParams } from 'react-router-dom';

export const SongList = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';
  const songs = useSongs();

  if (queryValue && !songs?.length) {
    return <p className="mt-4 text-red-800">No results found</p>;
  }

  if (!queryValue) {
    return null;
  }

  return (
    <ul className="mt-4 list-none text-lg">
      {songs?.map((song) => (
        <a
          className="mb-2 block overflow-x-hidden text-ellipsis whitespace-nowrap"
          href={song.href}
          key={song.id}
          title={song.name}>
          <span aria-label="Musical Note" className="pr-2" role="img">
            🎵
          </span>
          {song.name}
        </a>
      ))}
    </ul>
  );
};
