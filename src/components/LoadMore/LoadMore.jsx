import PropTypes from "prop-types";
import css from "./LoadMore.module.css";

const LoadMore = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMore;
