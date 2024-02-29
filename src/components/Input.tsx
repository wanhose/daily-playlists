import { ChangeEvent, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Input = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      setSearchParams(value ? { q: value } : {});
    },
    [setSearchParams]
  );

  return (
    <input
      className="mt-4 w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-xl text-white focus:border-spotify focus:outline-none"
      data-testid="search-input"
      defaultValue={queryValue}
      onChange={handleChange}
      placeholder="Search tracks..."
      type="text"
      value={queryValue}
    />
  );
};
