import { Input } from 'components/Input';
import { RecentList } from 'components/RecentList';
import { SongList } from 'components/SongList';
import { Title } from 'components/Title';

export const App = () => (
  <>
    <Title />
    <Input />
    <RecentList />
    <SongList />
  </>
);
