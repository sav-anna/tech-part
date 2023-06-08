import css from "./userCard.module.css";

export const UserCard = () => {
  return (
    <div className={css.container}>
      <span className={css.goIt}></span>
      <span className={css.bgImage}></span>
      <div className={css.box}>
        <img
          className={css.image}
          src="../../assets/images/hansel.png"
          alt="user"
          //   width={80}
          //   height={80}
        />
      </div>

      <p className={css.tweets}>tweets</p>
      <p className={css.followers}>followers</p>
      <button className={css.button} type="button">
        follow
      </button>
    </div>
  );
};
