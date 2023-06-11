import css from "./Home.module.css";
import picture2 from "../../assets/images/picture2.png";
const Home = () => {
  return (
    <div>
      <h2 className={css.title}>Welcome to Tweets</h2>
      <img className={css.image} src={picture2} alt="tweets" />

      <p className={css.text}>
        If you want to see the statistics of users and their followers, please
        go to Tweets page to continue...
      </p>
    </div>
  );
};
export default Home;
