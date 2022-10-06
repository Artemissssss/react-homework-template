//JSON files with information ↓
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
//JS files of copmoments ↓
import Profile from "./Profile/Profile.js";
import Statistics from "./Statistics/Statistics.js";
import FriendsList from "./Friends/Friends.js";
import TransactionHistory from "./TransactionHistory/TransactionHistory.js";
//Code for render ↓
const container = (
  <main>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />

    <ul className="friend-list">
      {friends.map((friends) => {
        return (
          <FriendsList
            key={friends.id}
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
        );
      })}
    </ul>
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <TransactionHistory
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  </main>
);
// function for return ↓
export default function App() {
  return container;
}
