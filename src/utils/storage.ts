export const RECENT_SONGS_KEY = 'recent-songs';

export const getRecentSongs = (): readonly string[] => {
  const data = localStorage.getItem(RECENT_SONGS_KEY);
  return data ? JSON.parse(data) : [];
};

export const pushRecentSong = (item: string) => {
  const array = [...getRecentSongs()];
  array.push(item);

  // If array length exceeds 5, remove the oldest item
  if (array.length > 5) {
    array.shift();
  }

  // Store the updated array back into local storage
  localStorage.setItem(RECENT_SONGS_KEY, JSON.stringify(array));
  window.dispatchEvent(new CustomEvent(RECENT_SONGS_KEY));
};
