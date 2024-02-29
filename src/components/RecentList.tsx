import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecentSearches, RECENT_SEARCHES_KEY } from 'utils/storage';

export const RecentList = () => {
  const [recentSearches, setRecentSearches] = useState<readonly string[]>(getRecentSearches());
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';

  useEffect(() => {
    function handleStorage() {
      setRecentSearches(getRecentSearches());
    }

    window.addEventListener(RECENT_SEARCHES_KEY, handleStorage);

    return () => {
      window.removeEventListener(RECENT_SEARCHES_KEY, handleStorage);
    };
  }, []);

  return (
    <ul className={`mt-4 list-none text-lg ${queryValue ? 'hidden' : ''}`}>
      {recentSearches.toReversed().map((item, index) => (
        <li className="mb-2" key={index}>
          <span aria-label="Clock" className="pr-2" role="img">
            🕒
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};
