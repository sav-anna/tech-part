import { useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore/LoadMore";
import TweetList from "../../components/TweetList/TweetList";
import { useFetchUsersQuery } from "../../redux/services/users-api";
import { Link } from "react-router-dom";
import css from "./Tweets.module.css";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useFetchUsersQuery(page);
  const [tweets, setTweets] = useState([]);
  console.log(data);
  console.log(page);

  useEffect(() => {
    if (data) {
      setTweets((prevData) => {
        return [...prevData, ...data];
      });
    }
  }, [setTweets, data]);

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <Link className={css.link} to="/">
        Go Back
      </Link>

      <div>
        {!isFetching && tweets?.length > 0 ? (
          <TweetList users={tweets} />
        ) : (
          <p>There is no tweets...🥺</p>
        )}
        {tweets?.length > 0 && tweets?.length !== 12 && (
          <LoadMore onClick={handleLoadMore} />
        )}
      </div>
    </>
  );
};

export default Tweets;
