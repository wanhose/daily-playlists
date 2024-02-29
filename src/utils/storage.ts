export const RECENT_SEARCHES_KEY = 'recent-searches';

export const getRecentSearches = (): readonly string[] => {
  const data = localStorage.getItem(RECENT_SEARCHES_KEY);
  return data ? JSON.parse(data) : [];
};

export const pushRecentSearch = (item: string) => {
  const array = [...getRecentSearches()];
  array.push(item);

  // If array length exceeds 5, remove the oldest item
  if (array.length > 5) {
    array.shift();
  }

  // Store the updated array back into local storage
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(array));
  window.dispatchEvent(new CustomEvent(RECENT_SEARCHES_KEY));
};
