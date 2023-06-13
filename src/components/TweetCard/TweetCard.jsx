import { useUpdateUserMutation } from "../../redux/services/users-api";
import css from "./TweetCard.module.css";

const convertNumber = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const TweetCard = ({ id, avatar, tweets, followers, following }) => {
  const [updateUser] = useUpdateUserMutation();

  const removeFollowers = () => {
    const newFollower = { id: id, following: false, followers: followers - 1 };
    updateUser(newFollower);
    console.log(newFollower);
  };
  const addFollowers = () => {
    const newFollower = { id: id, following: true, followers: followers + 1 };
    updateUser(newFollower);
  };

  const updateUserFollowers = async () => {
    if (!following) {
      await addFollowers();
      following = true;
      return;
    }
    removeFollowers();
    following = false;
  };

  return (
    <div className={css.container}>
      <span className={css.goIt}></span>
      <span className={css.bgImage}></span>
      <div className={css.box}>
        <img className={css.image} src={avatar} alt={avatar} />
      </div>

      <p className={css.tweets}>{tweets} tweets</p>
      <p className={css.followers}>{convertNumber(followers)} followers</p>

      <button
        className={css.button}
        type="button"
        onClick={updateUserFollowers}>
        {following ? "following" : "follow"}
      </button>
    </div>
  );
};

export default TweetCard;
