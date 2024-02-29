import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecentSongs, RECENT_SONGS_KEY } from 'utils/storage';

export const RecentList = () => {
  const [recentSongs, setRecentSongs] = useState<readonly string[]>(getRecentSongs());
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';

  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { value } = event.currentTarget.dataset;

      if (value) {
        searchParams.set('q', value);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  useEffect(() => {
    function handleStorage() {
      setRecentSongs(getRecentSongs());
    }

    window.addEventListener(RECENT_SONGS_KEY, handleStorage);

    return () => {
      window.removeEventListener(RECENT_SONGS_KEY, handleStorage);
    };
  }, []);

  return (
    <div className={`mt-4 list-none text-lg ${queryValue ? 'hidden' : ''}`}>
      {recentSongs.toReversed().map((item, index) => (
        <div
          className="mb-2"
          data-value={item}
          key={index}
          onClick={handleItemClick}
          role="button"
          tabIndex={0}>
          <span aria-label="Clock" className="pr-2" role="img">
            🕒
          </span>
          {item}
        </div>
      ))}
    </div>
  );
};
