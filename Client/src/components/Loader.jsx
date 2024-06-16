import css from "./style/loader.module.css";
const Loader = () => {
  return (
    <>
      <div className={css.loader}>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    </>
  );
};

export default Loader;
