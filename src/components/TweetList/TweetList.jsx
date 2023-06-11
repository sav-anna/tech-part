import css from "./TweetList.module.css";

import TweetCard from "../TweetCard/TweetCard";

const TweetList = ({ users }) => {
  return (
    <ul className={css.tweetList}>
      {users.map(({ id, avatar, tweets, followers, following }) => (
        <TweetCard
          key={id}
          id={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
          following={following}
        />
      ))}
    </ul>
  );
};
export default TweetList;
