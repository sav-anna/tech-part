import PropTypes from "prop-types";
import { useUpdateUsersMutation } from "../../redax/services/users-api";
import css from "./TweetCard.module.css";

const convertNumber = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const TweetCard = ({ id, avatar, tweets, followers, following }) => {
  const [updateUsers, { isLoading }] = useUpdateUsersMutation();

  const updateUserFollowers = () => {
    const status = !following;
    console.log(status);
    const newFollowers = status ? (followers += 1) : (followers -= 1);

    updateUsers({
      id,
      newFollowers,
      status,
    });
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
        onClick={updateUserFollowers}
        disabled={isLoading}>
        {following && isLoading ? "following" : "follow"}
      </button>
    </div>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};

export default TweetCard;
