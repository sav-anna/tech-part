import "./App.css";
import LoadMore from "./components/LoadMore/LoadMore";
import TweetList from "./components/TweetList/TweetList";
import { useFetchUsersQuery } from "./redax/services/users-api";

function App() {
  const { data } = useFetchUsersQuery();
  console.log(data);

  return (
    <div>
      {data?.length > 0 ? (
        <TweetList users={data} />
      ) : (
        <p>There is no tweets...🥺</p>
      )}
      <LoadMore />
    </div>
  );
}
export default App;
