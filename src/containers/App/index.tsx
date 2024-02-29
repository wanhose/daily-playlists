const App = () => (
  <div className="p-4">
    <p className="text-center text-2xl">
      Daily Playlists{' '}
      <span aria-label="Musical Notes" role="img">
        🎶
      </span>
    </p>
    <input
      className="mt-4 w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-xl text-white focus:border-spotify focus:outline-none"
      type="text"
      placeholder="Search"
    />
    <ul className="mt-4 list-none text-lg">
      <li className="mb-2">
        <span aria-label="Clock" className="pr-2" role="img">
          🕒
        </span>
        Recent Song
      </li>
    </ul>
    <ul className="mt-4 list-none text-lg">
      <li className="mb-2">
        <span aria-label="Musical Note" className="pr-2" role="img">
          🎵
        </span>
        Song
      </li>
    </ul>
  </div>
);

export default App;
