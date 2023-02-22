import { Profile } from './UserProfile/Profile';
import user from './UserProfile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
