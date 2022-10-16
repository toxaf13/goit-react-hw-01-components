import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transaction from './components/TransactionHistory/transactions.json';

import { App } from 'components/App';
import { Profile } from './components/Profile/profile';
import { Statistics } from './components/Statistics/statistics';
import { FriendList } from './components/FriendList/friendList';
import { TransactionHistory } from './components/TransactionHistory/transactionHistory';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App>
   <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
   <Statistics title="Upload stats" stats={data} />
   <FriendList friends={friends} />
   <TransactionHistory items={transaction} />
   </App>
  </React.StrictMode>
);
