import { KeyboardEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { pushRecentSearch } from 'utils/storage';

export const Input = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.currentTarget.value && event.key === 'Enter') {
        const value = event.currentTarget.value;
        pushRecentSearch(value);
        setSearchParams({ q: value });
      } else {
        searchParams.delete('q');
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  return (
    <input
      className="mt-4 w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-xl text-white focus:border-spotify focus:outline-none"
      data-testid="search-input"
      defaultValue={queryValue}
      onKeyDown={handleKeyDown}
      placeholder="Search and press Enter..."
      type="text"
    />
  );
};
