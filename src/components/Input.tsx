import { KeyboardEvent, useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('q') || '';

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      if (value && event.key === 'Enter') {
        setSearchParams({ q: value });
      } else if (!value) {
        searchParams.delete('q');
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  useEffect(() => {
    inputRef.current?.setAttribute('value', queryValue);
  }, [queryValue]);

  return (
    <input
      className="mt-4 w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-xl text-white focus:border-spotify focus:outline-none"
      data-testid="search-input"
      defaultValue={queryValue}
      onKeyUp={handleKeyUp}
      placeholder="Search and press Enter..."
      ref={inputRef}
      type="text"
    />
  );
};
