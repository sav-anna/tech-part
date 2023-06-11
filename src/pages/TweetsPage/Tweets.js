import LoadMore from "../../components/LoadMore/LoadMore";
import TweetList from "../../components/TweetList/TweetList";
import { useFetchUsersQuery } from "../../redax/services/users-api";

const Tweets = () => {
  const { data } = useFetchUsersQuery();
  // console.log(data);
  const handleLoadMore = () => {
    console.log("click");
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
