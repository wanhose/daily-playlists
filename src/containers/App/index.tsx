import { Fallback } from 'components/Fallback';
import { Input } from 'components/Input';
import { RecentList } from 'components/RecentList';
import { SongList } from 'components/SongList';
import { Title } from 'components/Title';
import { useAccessToken } from 'hooks/useAccessToken';
import { Suspense, useEffect } from 'react';

export const App = () => {
  const accessToken = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      window.localStorage.setItem('access-token', accessToken);
    }
  }, [accessToken]);

  return (
    <>
      <Title />
      <Input />
      <RecentList />
      <Suspense fallback={<Fallback className="mt-4" text="Loading..." />}>
        <SongList />
      </Suspense>
    </>
  );
};
