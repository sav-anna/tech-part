import { MutatingDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <MutatingDots
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
};
export default Loader;
