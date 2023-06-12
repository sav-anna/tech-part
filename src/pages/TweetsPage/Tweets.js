import { useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore/LoadMore";
import TweetList from "../../components/TweetList/TweetList";
import { useFetchUsersQuery } from "../../redax/services/users-api";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const { data } = useFetchUsersQuery(page);
  // const [tweets, setTweets] = useState(data);

  // useEffect(() => {
  //   setTweets(tweets);
  // }, [tweets]);

  // useEffect(() => {
  //   const savedPage = localStorage.getItem("page");
  //   if (savedPage) {
  //     setPage(parseInt(savedPage));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("page", page.toString());
  //   setTweets(page * 3);
  // }, [page, setTweets]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  return (
    <div>
      {data?.length > 0 ? (
        <TweetList users={data} />
      ) : (
        <p>There is no tweets...🥺</p>
      )}
      <LoadMore onClick={handleLoadMore} />
    </div>
  );
};

export default Tweets;
