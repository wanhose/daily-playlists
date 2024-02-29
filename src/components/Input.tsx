import { ChangeEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Input = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('s') || '';

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.value) {
        setSearchParams({ s: event.currentTarget.value });
      } else {
        searchParams.delete('s');
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  return (
    <input
      className="mt-4 w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-xl text-white focus:border-spotify focus:outline-none"
      data-testid="search-input"
      onChange={handleChange}
      placeholder="Search"
      type="text"
      value={searchValue}
    />
  );
};
