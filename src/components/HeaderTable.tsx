import styles from "./HeaderTable.module.scss";

const HeaderTable: React.FC = () => {
  return (
    <div className={`${styles.div} ${styles.bold}`}>
        <div>Название</div>
        <div>Язык</div>
        <div>Число форков</div>
        <div>Число Звезд</div>
        <div>Дата обновления</div>
    </div>
  );
};

export default HeaderTable;